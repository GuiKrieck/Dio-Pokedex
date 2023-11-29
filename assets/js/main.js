const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('LoadMoreButton')
const loadMoreDiv = document.getElementById('LoadMoreDiv')
const genButtons = {
    gen1: document.getElementById('1Gen'),
    gen2: document.getElementById('2Gen'),
    gen3: document.getElementById('3Gen'),
    gen4: document.getElementById('4Gen'),
    gen5: document.getElementById('5Gen'),
    gen6: document.getElementById('6Gen'),
    gen7: document.getElementById('7Gen'),
    gen8: document.getElementById('8Gen'),
    gen9: document.getElementById('9Gen'),
}
const generationsOffset = {
    gen1: [0,150],
    gen2: [151,250],
    gen3: [251,385],
    gen4: [386,492],
    gen5: [493,648],
    gen6: [649,720],
    gen7: [721,808],
    gen8: [809,904],
    gen9: [905,1016],
}
const limit = 10;
let offset = 0;
let maxRecords = 151;
let qtdRecord = 0

let ehgen9 = false


function loadPokemonItens(offset, limit){    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => {
            if(!ehgen9){
                return `
                <li class="pokemon ${pokemon.type}">
                    <span class="number"> #${pokemon.id} </span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.sprite}"
                            alt=${pokemon.name}">

                        <img src="${pokemon.shinySprite}"
                            alt= "shiny ${pokemon.name}">
                        </div>
                        <div class="pokeColor">
                            <span id="colorNormal"> Normal</span>
                            <span id="colorShiny"> Shiny</span>
                        </div>
                    </li>
                `
            }else {
                return `
                <li class="pokemon ${pokemon.type}">
                    <span class="number"> #${pokemon.id} </span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.sprite}"
                            alt=${pokemon.name}">
                        </div>
                    </li>
                `
            }}).join('')
            pokemonList.innerHTML += newHtml
    })
}

function getNewGenPokemon(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => {
            if(!ehgen9){
                return `
                <li class="pokemon ${pokemon.type}">
                    <span class="number"> #${pokemon.id} </span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.sprite}"
                            alt=${pokemon.name}">

                        <img src="${pokemon.shinySprite}"
                            alt= "shiny ${pokemon.name}">
                        </div>
                        <div class="pokeColor">
                            <span id="colorNormal"> Normal</span>
                            <span id="colorShiny"> Shiny</span>
                        </div>
                    </li>
                `
            }else {
                return `
                <li class="pokemon ${pokemon.type}">
                    <span class="number"> #${pokemon.id} </span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
        
                        <img src="${pokemon.sprite}"
                            alt=${pokemon.name}">
                        </div>
                    </li>
                `
            }}).join('')
        pokemonList.innerHTML = newHtml
    })
    loadMoreDiv.appendChild(loadMoreButton)
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    qtdRecord = offset + limit;

    if(qtdRecord >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset,newLimit)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else {
        loadPokemonItens(offset,limit)
    }
})

genButtons.gen1.addEventListener('click', () =>{
    ehgen9 = false;
    tradeGenerations(generationsOffset.gen1);
    getNewGenPokemon(offset, limit);
})

genButtons.gen2.addEventListener('click', () =>{
    ehgen9 = false;
    tradeGenerations(generationsOffset.gen2);
    getNewGenPokemon(offset, limit);
})

genButtons.gen3.addEventListener('click', () =>{
    ehgen9 = false;
    tradeGenerations(generationsOffset.gen3);
    getNewGenPokemon(offset, limit);
})

genButtons.gen4.addEventListener('click', () =>{
    ehgen9 = false;
    tradeGenerations(generationsOffset.gen4);
    getNewGenPokemon(offset, limit);
})

genButtons.gen5.addEventListener('click', () =>{
    ehgen9 = false;
    tradeGenerations(generationsOffset.gen5);
    getNewGenPokemon(offset, limit);
})

genButtons.gen6.addEventListener('click', () =>{
    ehgen9 = false;
    tradeGenerations(generationsOffset.gen6);
    getNewGenPokemon(offset, limit);
})

genButtons.gen7.addEventListener('click', () =>{
    ehgen9 = false;
    tradeGenerations(generationsOffset.gen7);
    getNewGenPokemon(offset, limit);
})
genButtons.gen8.addEventListener('click', () =>{
    ehgen9 = false;
    tradeGenerations(generationsOffset.gen8);
    getNewGenPokemon(offset, limit);
})
genButtons.gen9.addEventListener('click', () =>{
    ehgen9 = true;
    tradeGenerations(generationsOffset.gen9);
    getNewGenPokemon(offset, limit);
})

function tradeGenerations(gen){
    qtdRecord = 0;
    offset = gen[0]
    maxRecords = gen[1] + 1;
}
