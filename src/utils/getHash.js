const getHash = () => //Obtenemos el hash
location.hash.slice(1)
.toLocaleLowerCase()    //Conviertelo a minuscula
.split('/')[1] || '/';  //retira los '/'. y dame el elemento que necesito en este caso el de la posicion 1 ['', '1', '']

/*
    nos exporta un id o un '/' que evaluaremos en resolveRoutes
*/
export default getHash;