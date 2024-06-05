CREATE TABLE Artista (
    ID_Artista INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    titulo VARCHAR(150),
    año_de_publicacion DATE,
    precio DECIMAL(10, 2),
    cantidad INT
);

CREATE TABLE Discografia (
    ID_Disco INT AUTO_INCREMENT PRIMARY KEY,
    ID_Artista INT,
    genero VARCHAR(150),
    FOREIGN KEY (ID_Artista) REFERENCES Artista(ID_Artista)
);

CREATE TABLE Tienda (
    ID_tienda INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    ciudad VARCHAR(200),
    direccion VARCHAR(200)
);

CREATE TABLE Cliente (
    ID_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    apellido VARCHAR(150),
    direccion VARCHAR(150),
    telefono VARCHAR(12),
    correo VARCHAR(150),
    total_venta DECIMAL(10, 2)
);

CREATE TABLE Empleado (
    ID_empleado INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    apellido VARCHAR(150),
    email VARCHAR(150),
    salario DECIMAL(10, 2)
);

CREATE TABLE Inventario (
    ID_tienda INT,
    ID_disco INT,
    cantidad INT,
    PRIMARY KEY (ID_tienda, ID_disco),
    FOREIGN KEY (ID_tienda) REFERENCES Tienda(ID_tienda),
    FOREIGN KEY (ID_disco) REFERENCES Discografia(ID_Disco)
);

CREATE TABLE Ventas (
    ID_venta INT AUTO_INCREMENT PRIMARY KEY,
    ID_cliente INT,
    ID_empleado INT,
    fecha DATE,
    total DECIMAL(10, 2),
    FOREIGN KEY (ID_cliente) REFERENCES Cliente(ID_cliente),
    FOREIGN KEY (ID_empleado) REFERENCES Empleado(ID_empleado)
);

CREATE TABLE Detalle_Venta (
    ID_venta INT,
    ID_disco INT,
    cantidad INT,
    precio_unitario DECIMAL(10, 2),
    PRIMARY KEY (ID_venta, ID_disco),
    FOREIGN KEY (ID_venta) REFERENCES Ventas(ID_venta),
    FOREIGN KEY (ID_disco) REFERENCES Discografia(ID_Disco)
);