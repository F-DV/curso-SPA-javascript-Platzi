import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

//Creamos un objeto de las rutas a las paginas que vamos a manejar
const routes = {
    '/': Home,
    '/:id':Character,
    '/contact': 'Concat'
}

//Creamos nuestro manejador de las rutas
const router = async () =>{
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header();
    
}
export default router;