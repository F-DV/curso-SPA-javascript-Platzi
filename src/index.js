import router from './routes/index';

//Windos es un objeto del manejador, lo utilizaremos para escuchar si esta en el contexto de la ventana
window.addEventListener('load', router);        //Escuchar si carga envia la ruta
window.addEventListener('hashchange',router);  //Escucha si cambia de ruta 