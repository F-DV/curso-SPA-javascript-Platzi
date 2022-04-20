const API = 'https://rickandmortyapi.com/api/character/'

const getData = async(id) =>{
    const apiURL = id ? `${API}${id}` : API;    //Si el id existe, contatena ese id a la url si no devuelve solo la url
    
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    }catch (error) {
        console.log('Fetch Error', error)
    };
};
export default getData;