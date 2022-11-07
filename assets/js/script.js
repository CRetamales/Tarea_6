//URL de la API
let url = "https://pokeapi.co/api/v2/pokemon/";

//Función que obtiene los datos de la API
//Entrada: url de la API
//Salida: objeto con los datos de la API
async function get_Pokemon(url) {
    try {
        let response = await axios.get(url);
        return response.data;
    } catch (error) {
        // muestra el error en caso de que no se pueda acceder a la API
        console.log(error);
        //retorna un objeto vacio
        return {};
    }
}

//Función que muestra los datos de la API
//Entrada: objeto con los datos de la API
//Salida: void
async function show_Pokemon_api(url) {
    let pokemon = await get_Pokemon(url);
    console.log(pokemon);
}

//Llamada a la función show_Pokemon
show_Pokemon_api(url);


// usando el id lista-pokemones para mostrar los datos de la API
// en el archivo index.html
let lista = document.getElementById("lista-pokemones");
let imagen = document.getElementById("imagen-pokemon");

//Función que muestra los datos de la API
//Entrada: objeto con los datos de la API
//Salida: void
async function show_Pokemon_name(url) {
    let pokemon = await get_Pokemon(url);
    //console.log(pokemon);
    let html = "";
    pokemon.results.forEach(poke => {
        html += `<li>${poke.name}</li>`;
    });
    lista.innerHTML = html;
}

//Función que accede a cada url de los pokemones y 
// dado la variable sprite muestra la imagen del pokemon
//Entrada: objeto con los datos de la API
//Salida: void
async function show_Pokemon_image(url) {
    let pokemon = await get_Pokemon(url);
    //ahora accedemos a cada url de los pokemones
    pokemon.results.forEach(async poke => {
        let pokemon = await get_Pokemon(poke.url);
        //console.log(pokemon);
        imagen.innerHTML += `<img src="${pokemon.sprites.front_default}">`;
        //muestra por consola la url de la imagen
        console.log(pokemon.sprites.front_default);
    });

}



show_Pokemon_name(url);
show_Pokemon_image(url);