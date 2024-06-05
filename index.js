const {app, PORT} = require('./config');
require('./app');

//inicio servidor
app.listen(PORT, () => {
    console.log('servidor iniciando en el puerto:${PORT}');
});