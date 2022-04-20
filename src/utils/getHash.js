
/*
EJEMPLO: http://localhost:8081/#/1/
Obtenemos el hash y cortamos con slice 1 elemento y dejamos /1/
Conviertelo a minuscula
con split convertimos el String en Array separandolos cada vez que encuentre un '/'
y returna el elemento[1] queda el 1 del ejemplo
*/
const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';  
 
/*
    nos exporta un id o un '/' que evaluaremos en resolveRoutes
*/

export default getHash;