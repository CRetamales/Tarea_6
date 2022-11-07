//Importación de libreria axios
import axios from 'axios';

//Url de la API
let url = "https://pokeapi.co/api/v2/pokemon/asdas";

//Función que obtiene los datos de la API
//Entrada: url de la API
//Salida: objeto con los datos de la API
async function get_Pokemon(url) {
    try {
        let response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.log(error);
        //retorna un objeto vacio
        return {};
    }
}

//Función que muestra los datos de la API
//Entrada: objeto con los datos de la API
//Salida: void
async function show_Pokemon(url) {
    let pokemon = await get_Pokemon(url);
    console.log(pokemon);
}

//Llamada a la función show_Pokemon
show_Pokemon(url);
