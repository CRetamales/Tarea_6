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



let cards = document.getElementById("cards");

//Función que muestra los datos de la API
//Entrada: objeto con los datos de la API
//Salida: void
async function show_Pokemon_api(url) {
    let pokemon_data = await get_Pokemon(url);
    // si pokemon_data es {} no se muestra nada
    if (Object.keys(pokemon_data).length === 0) {
        alert("No se pudo acceder a la API");
        return;
    } else {
        //* En este caso revisando la API siempre tiene un nombre/url el pokemon
        //* porque checkeamos eso haciendo peticiones manualmente
        //* pero en caso de que no tenga nombre/url se puede usar un if
        //* para revisar si tiene nombre o no y que no sea undefined y así
        //* evitar errores o que el programa se caiga
        //* ocurre lo mismo para la imagen, siempre tiene una imagen frontal
        //* pero en caso de que no tenga se puede usar un if para revisar
        //* si tiene imagen o no y que no sea undefined.
        pokemon_data = pokemon_data.results;
        pokemon_data.forEach(async pokemon => {
            let pokemon_data = await get_Pokemon(pokemon.url);
            cards.innerHTML = cards.innerHTML + `
            <li class="cards__item">
                <div class="card">
                    <img src="${pokemon_data.sprites.front_default}" alt="${pokemon.name}" class="card__img">
                    <h2 class="card__title">${pokemon.name}</h2>
                </div>
            </li>`;
        });
    }
}

show_Pokemon_api(url);

