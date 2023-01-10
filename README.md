# Aplicación de lectura bíblica

1- ¡Hola! Mi nombre es oscar y hoy quiero presentarles mi proyecto de lectura bíblica.

2- Mi proyecto es una aplicación web que permite a los usuarios leer y marcar sus versículos favoritos de la Biblia.

3- Los usuarios pueden crear una cuenta y guardar sus versículos favoritos en su perfil para acceder a ellos más tarde. 
Además, proporciono una interfaz fácil de usar para navegar por diferentes libros y capítulos de la Biblia.

Creo que esta aplicación puede ser muy útil para personas que quieran estudiar la Biblia de manera más efectiva
y tener acceso a sus versículos favoritos en cualquier momento y lugar.

Estoy planeando monetizar este proyecto agregando una seccion de  venta de libros cristianos como bliblias devocionales y comentarios.

Espero tener una versión beta disponible en los próximos meses !gracias

# Documentacion


## Resumen

Este proyecto es una aplicación de lectura bíblica desarrollada con React, Node.js y Express, y conectada a una base de datos MySQL. La aplicación se alimenta de una API REST externa para obtener la información de las Escrituras.

Los usuarios pueden registrarse en la aplicación y luego acceder a la parte principal, donde pueden seleccionar el libro y capítulo que deseen leer. También pueden agregar versículos a una sección de favoritos que se persiste en la base de datos y puede ser accedida en cualquier momento desde el menú.

Además, estás utilizando Redux Toolkit para gestionar el estado de la aplicación y Material UI para pintar los componentes.

## Arquitectura

La arquitectura del proyecto consiste en una aplicación cliente desarrollada con React y un servidor construido con Node.js y Express. El servidor se conecta a una base de datos MySQL para almacenar la información de los usuarios y sus versículos favoritos, y también se comunica con la API REST externa para obtener la información de los diferentes Libros.

A continuación se describen las principales partes de la arquitectura:

## Cliente

El cliente está desarrollado con React y utiliza Redux Toolkit para gestionar el estado de la aplicación. También se está utilizando Material UI para diseñar la interfaz de usuario.

## Servidor

El servidor está construido con Node.js y Express y se encarga de proporcionar la API que utiliza el cliente para acceder a la base de datos y a la API REST externa. También se encarga de realizar la autenticación de usuarios y la validación de credenciales.

## Base de datos

La base de datos MySQL se utiliza para almacenar la información de los usuarios y sus versículos favoritos. El servidor se conecta a ella mediante una conexión JDBC y realiza consultas para obtener y almacenar esta información.

## API REST 

La API REST externa se utiliza para obtener la información de las Escrituras y se accede desde el servidor mediante solicitudes HTTP.

## Funcionalidades

A continuación se describen las funcionalidades principales de la aplicación:

Registro de usuarios

Los usuarios pueden registrarse en la aplicación proporcionando su nombre de usuario

Acceso a la lectura bíblica

Una vez que un usuario está registrado y ha iniciado sesión, puede acceder a la parte principal de la aplicación y seleccionar el libro y capítulo que desee leer. La información se carga de la API REST externa y se muestra al usuario en la interfaz de la aplicación.

Favoritos

Los usuarios pueden marcar versículos como favoritos y acceder a ellos desde la sección de favoritos del menú. Esta información se almacena en la base de datos y se mantiene disponible para el usuario incluso después de cerrar la sesión.

## Estructura de archivos

La estructura de archivos de tu proyecto está dividida en dos partes principales: el cliente y el servidor.

Cliente

La carpeta del cliente contiene todos los archivos necesarios para la aplicación de React, incluyendo componentes, estilos y archivos de configuración de Redux.

Servidor

La carpeta del servidor incluye todos los archivos necesarios para el servidor de Node.js y Express, incluyendo la lógica de la API, la conexión a la base de datos y la integración con la API REST externa.

Espero que esta documentación te sea útil. Si tienes alguna pregunta o necesitas más detalles, no dudes en preguntar.



# Instalación

Clona este repositorio en tu computadora:

### git clone https://github.com/oscar918/bible-frontend.git

Instala las dependencias del servidor y del cliente ejecutando npm install en la raíz del proyecto y en la carpeta client:

### cd redux-app
### npm install

Inicializa la base de datos ejecutando el script database/init.sql en tu gestor de base de datos MySQL.

Arranca el servidor y el cliente en modo desarrollo siguiente ejecutando:
### `npm run dev`


## Accede a la aplicación a través de tu navegador en http://localhost:3000

1- Registra una cuenta o inicia sesión si ya tienes una cuenta

2- Selecciona un libro y un capítulo de la Biblia en el menú de navegación

3- Agrega tus versículos favoritos haciendo clic en el botón "Agregar a favoritos"

4- Accede a tus versículos favoritos haciendo clic en el enlace "Favoritos" en el menú de navegación

