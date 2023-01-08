CREATE TABLE usuarios (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  nombre_usuario VARCHAR(50) NOT NULL,
  correo VARCHAR(50) NOT NULL,
  contraseña VARCHAR(255) NOT NULL
);

--Usuarios: Almacena información sobre los usuarios de la aplicación, como su nombre de usuario, 
--correo electrónico y contraseña. Tiene una clave primaria única, que es el campo "id".

CREATE TABLE favoritos (
  id_usuario INTEGER NOT NULL,
  id_elemento INTEGER NOT NULL,
  PRIMARY KEY (id_usuario, id_elemento),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

--Favoritos: Almacena información sobre los favoritos de los usuarios, como el id del usuario 
--y el id del elemento favorito. Tiene una clave primaria compuesta por los campos "id_usuario" y "id_elemento". Además, tiene una clave foránea que hace referencia al campo "id" de la tabla de usuarios.

CREATE TABLE elementos (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  titulo VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL
);

--Elementos: Almacena información sobre los elementos que pueden ser marcados como favoritos, 
--como su título y descripción. Tiene una clave primaria única, que es el campo "id".




