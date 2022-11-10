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

