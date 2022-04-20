const resolveRoutes = (route) => {
    
    if(route.length <= 3){          //Evaluamos que no tenga mas de 3 caracteres ya que no tenemos mas de 1000 personajes
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }       
    return `/${route}`;     // si no devuelve route que seria la misma que ingreso
};

export default resolveRoutes;