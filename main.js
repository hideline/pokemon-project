
// function darkMode() {
//     document.querySelector('#main-html').classList.toggle('dark')
// }

let pokemon = ['Mew', 'Mewtwo', 'Rayquaza', 'Arceus', 'Solgaleo']

document.getElementById('lista').innerHTML = pokemon.join(', ')
const inputElement = document.querySelector('#scegliPokemon');

const contenitore = document.getElementById('contenitorePokemon')
//                         prima gen 151 
const numbers = Array.from({ length: 1000 }, (_, index) => index + 1);
const menu = document.getElementById('menu')
const select = document.getElementById('spawnMenu')

function hasOnlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function pushPokemon() {
    let scegliPokemon = document.getElementById('scegliPokemon')
    let valore = scegliPokemon.value
    if (hasOnlyLetters(valore)) {
        const ultimo = pokemon.length - 1
        if (pokemon[ultimo] !== valore) {
            pokemon.push(valore)
            document.getElementById('lista').innerHTML = pokemon.join(', ')
            scegliPokemon.value = '';
        }
    }
}
function spawnMenu() {
    menu.classList.toggle('hidden')
}

async function callPokemon(pokemon, provaType = '') {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await result.json()
    const frontImg = data.sprites.other['official-artwork'].front_default
    const tipo1 = data.types[0].type.name
    let tipo2 = ''
    if (data.types.length > 1) {
        tipo2 = data.types[1].type.name
    }
    if (provaType !== '') {
        if (tipo1 === 'fire') {
            const cardPoke = `<div class="bg-black/50 border-2 border-white/20  rounded-md p-4 "><div><h2 class="text-center text-white/75 font-semibold text-xl">${capitalizeFirstLetter(data.name)}<h2> <img src="${frontImg}" alt=" 404" class="my-2"><div id="contenitoreType" class="flex flex-wrap xl:flex-nowrap gap-2 mt-3 text-black/75 font-bold">
        ${data.types.length >= 2 ? doppioType(tipo1, tipo2) : singleType(tipo1)}
        </div></div></div>`
            contenitore.insertAdjacentHTML('beforeend', cardPoke)
        }
    } else {
        const cardPoke = `<div class="bg-black/50 border-2 border-white/20  rounded-md p-4 "><div><h2 class="text-center text-white/75 font-semibold text-xl">${capitalizeFirstLetter(data.name)}<h2> <img src="${frontImg}" alt=" 404" class="my-2"><div id="contenitoreType" class="flex flex-wrap xl:flex-nowrap gap-2 mt-3 text-black/60 font-bold">
        ${data.types.length >= 2 ? doppioType(tipo1, tipo2) : singleType(tipo1)}
        </div></div></div>`
        contenitore.insertAdjacentHTML('beforeend', cardPoke)
    }
}


function singleType(tipo1) {
    const single = `<p class="w-full p-1 ${elementoPokemon(tipo1)} rounded-md text-center">${capitalizeFirstLetter(tipo1)}</p>`
    return single
};

function doppioType(tipo1, tipo2) {
    const doppia = `<p class="w-full p-1  ${elementoPokemon(tipo1)} rounded-md text-center">${capitalizeFirstLetter(tipo1)} </p> <p class="w-full p-1 ${elementoPokemon(tipo2)} rounded-md text-center">${capitalizeFirstLetter(tipo2)}</p>`
    return doppia
};


async function loadPokemons(pokemons) {
    for (const pokemon of pokemons) {
        await callPokemon(pokemon)
    }
}
// qui carichi i pokemon appena sono pronti
loadPokemons(numbers)

var ciao = '123'

// metti la 1° lettera maiuscola
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// dai un colore allo sfondo dei tipi dei pokemon
function elementoPokemon(pokemon) {
    switch (pokemon) {
        case "poison":
            return 'bg-violet-500'
        case "fire":
            return 'bg-red-400'
        case "water":
            return 'bg-sky-300'
        case "ghost":
            return 'bg-violet-300'
        case "psychic":
            return 'bg-pink-300'
        case "grass":
            return 'bg-green-300'
        case "bug":
            return 'bg-lime-400'
        case "normal":
            return 'bg-gray-300'
        case "electric":
            return 'bg-yellow-300'
        case "flying":
            return 'bg-sky-200'
        case "rock":
            return 'bg-yellow-600'
        case "fighting":
            return 'bg-yellow-600'
        case "dragon":
            return 'bg-blue-400'
        case "dark":
            return 'bg-gray-700'
        case "ice":
            return 'bg-blue-100'
        case "ground":
            return 'bg-orange-400'
        case "steel":
            return 'bg-slate-400'
        case "fairy":
            return 'bg-pink-400'
        default:
            return 'bg-white'
    }
}

//Aggiungere un controllo per mostrare solo i pokemon con l'elemento selezionato