# curso-SPA-javascript-Platzi
Curso para crear una Single Page Application con javascript vanilla, en el cual se consume una API,
 en este caso la de Rick and Morty para crear la SPA

 1) Arquitectura de carpetas:
 -src : Donde vivira todo el codigo
 -pages: para manejar las pagina
 -routes: Manejo de rutas dentro de la aplicacion
 -styles: manejo de los estilos
 -utils: utilerias codigos de ayuda al proyecto
 -public: Vivi el codigo que vamos a utilizar, y el codigo que vamos a mandar a producción
 -templates: No son paginas si no partes de las paginas 
 ---------
Trabajamos con Webpack instalando inicialmente las siguientes dependencias (loaders y plugins)
@babel/core 
babel-loader 
html-webpack-plugin 
webpack webpack-cli 
webpack-dev-server 
(--save-dev) : Instalacion de desarrollo
-----------
Trabajo de Hash de la pagina
La forma de obtener el hash con javascript es la siguiente:

Código :
window.location.hash;
Sería práctico almacenarlo en una variable si lo vas a utilizar.

Código :
var hash = window.location.hash;