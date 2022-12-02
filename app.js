// My Pokemon app


// init
const pokeContainer = document.querySelector(`#container`);
// Using the first 150 Pokemon (AKA IDs/Objects) in the PokeAPI
const numOfPokemon = 150;
let outerPokemonData;
let outerPokemonCard;


// Creating card function

function createPokeCard(pokemon){
    const pokeCard = document.createElement(`section`);
    pokeCard.classList.add(`pokemon`);
    pokeContainer.append(pokeCard);
    // Setting the innerHTML for the new card using the data/object that is passed into the "pokemon" parameter. Also, using toUpperCase method on the pokemon name so it displays in UPPERCASE text.

    const c = `
    <div class="img-container">
        <img src="${pokemon.data.sprites.front_default}" alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}</h3>
    `

    pokeCard.innerHTML = ` ${c} `;

    // pokemon.data.types[0].type.name
   console.log(pokemon.data.types.length);

   



   pokeCard.addEventListener('click',(e) =>{
   console.log(pokemon.data);

   for (const item of pokemon.data.types) {
    console.log(item.type.name)
    
   }

  

   })
}


// Getting API data for the cards
async function getPokemonData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemonData = await axios.get(url);
    console.log(pokemonData.data);

    outerPokemonData = pokemonData.data;

    console.log(pokemonData.data.sprites.front_default);
    console.log(pokemonData.data.name);
    createPokeCard(pokemonData);
    
}

getPokemonData(1);

// console.log(outerPokemonCard);
// console.log(outerPokemonData);

