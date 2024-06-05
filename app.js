const { app } = require('./config'); 
const db = require ('./db');
const bcrypt = require('bcrypt'); 
const bodyParser = require('body-parser');

//rutas de las url
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/catalogo', (req, res) => {
    res.render('catalogo');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

//Ruta de logueo
app.get('/login', (req, res) => {
    res.render('login');
});

//Ruta de logueo
app.get('/registro', (req, res) => {
    res.render('registro');
});

//Ruta de registro
app.post('/registro', async (req, res) => {
    const { nombre, email, contraseña } = req.body;
    const hashedContaseña = await bcrypt.hash(contraseña, 10);

    db.query('INSERT INTO usuarios (nombre_usuario, email, contraseña) VALUES (?, ?, ?)', [nombre, email, hashedContaseña], (err, result) => {
        if(err) {
            console.log(err);
            res.send('Error al registrar usuario');
        }else {
            console.log(result);
            res.redirect('login');
            //res.send('Usuario insertado con exito!');
        }
    });
});

//Ruta de login
app.get('/login', (req, res) => {
    res.render('login');
});

//Ruta de iniciar session
app.post('/login', async (req, res) => {
    const { email, contraseña } = req.body;

    db.query('SELECT * FROM usuarios WHERE email = ? AND estado = 1', [email], async (err, result) => {
        if(err) {
            console.log(err);
            res.send('Error al iniciar session');
        }else {
            if(result.length > 0){
                const usuario = result[0];
                if(await bcrypt.compare(contraseña, usuario.contraseña)){
                    req.session.usuario = usuario;
                    res.redirect('/admin');
                }else{
                    res.send('Credenciales incorrectas');
                }
            } else {
                res.send('Usuario no encontado o no esta activo');
            }
        } 
    });
});


module.exports = app;
