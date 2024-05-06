
// let pokemon = ['Mew', 'Mewtwo', 'Rayquaza', 'Arceus', 'Solgaleo']
// document.getElementById('lista').innerHTML = pokemon.join(', ')
// const inputElement = document.querySelector('#scegliPokemon');

const contenitore = document.getElementById('contenitorePokemon')
//                         prima gen 151 totali 1302
const numbers = Array.from({ length: 151 }, (_, index) => index + 1);
const menu = document.getElementById('menu')
const select = document.getElementById('spawnMenu')

// function hasOnlyLetters(str) {
//     return /^[a-zA-Z]+$/.test(str);
// }

// function pushPokemon() {
//     let scegliPokemon = document.getElementById('scegliPokemon')
//     let valore = scegliPokemon.value
//     if (hasOnlyLetters(valore)) {
//         const ultimo = pokemon.length - 1
//         if (pokemon[ultimo] !== valore) {
//             pokemon.push(valore)
//             document.getElementById('lista').innerHTML = pokemon.join(', ')
//             scegliPokemon.value = '';
//         }
//     }
// }
const svg = document.getElementById('svgSelect')
function spawnMenu() {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        svg.classList.add('-rotate-90')
    } else {
        menu.classList.add('hidden')
        svg.classList.remove('-rotate-90')

    }

}

async function callPokemon(pokemon) {
    try {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await result.json()
        const frontImg = data.sprites.other['official-artwork'].front_default
        const tipo1 = data.types[0].type.name
        let tipo2 = ''
        if (data.types.length > 1) {
            tipo2 = data.types[1].type.name
        }

        const cardPoke = `<div class="bg-black/50 border-2 border-white/20  rounded-md p-4 "><div><h2 class="text-center text-white/75 font-semibold text-xl">${capitalizeFirstLetter(data.name)}<h2> <img src="${frontImg}" alt=" 404" class="my-2"><div id="contenitoreType" class="flex  flex-wrap xl:flex-nowrap gap-2 mt-3 text-black/60 font-bold">
            ${data.types.length >= 2 ? doppioType(tipo1, tipo2) : singleType(tipo1)}
            </div></div></div>`
        contenitore.insertAdjacentHTML('beforeend', cardPoke)
    } catch (error) {
        console.log(error)
    }
}

async function pokemini() {

    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/3`)
    const data = await result.json()
    console.log(data)

}
pokemini()

async function sortedPokemon(pokemon, elemento) {
    // contenitore.innerHTML = ''
    // reset del grid container
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await result.json()
    const frontImg = data.sprites.other['official-artwork'].front_default
    const tipo1 = data.types[0].type.name
    let tipo2 = ''
    if (data.types.length > 1) {
        tipo2 = data.types[1].type.name
    }
    // console.log(elemento)
    //  if elemento se è uguale a tipo1 o tipo2 allora stampo 
    if (elemento === tipo1 || elemento === tipo2) {
        // console.log('Sono dentro l IF')
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

async function loadSortedPokemons(pokemons, elemento) {
    contenitore.innerHTML = ''
    for (const pokemon of pokemons) {
        await sortedPokemon(pokemon, elemento)
    }
}


const bottoni = [{
    elemento: 'fire',
    selezionato: 'bg-red-400',
    normale: 'bg-slate-800/0'

},
{
    elemento: 'water',
    selezionato: 'bg-sky-500',
    normale: 'bg-slate-800/0'
},
{
    elemento: 'grass',
    selezionato: 'bg-green-300',
    normale: 'bg-slate-800/0'
},
{
    elemento: 'poison',
    selezionato: 'bg-violet-500',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'bug',
    selezionato: 'bg-lime-400',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'ice',
    selezionato: 'bg-blue-100',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'ghost',
    selezionato: 'bg-violet-300',
    normale: 'bg-slate-800/0'
},
{
    elemento: 'dark',
    selezionato: 'bg-gray-700',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'ground',
    selezionato: 'bg-orange-400',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'steel',
    selezionato: 'bg-slate-400',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'rock',
    selezionato: 'bg-yellow-600',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'electric',
    selezionato: 'bg-yellow-300',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'fighting',
    selezionato: 'bg-yellow-700',
    normale: 'bg-slate-800/0'
},


{
    elemento: 'fairy',
    selezionato: 'bg-pink-400',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'psychic',
    selezionato: 'bg-pink-300',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'dragon',
    selezionato: 'bg-indigo-400',
    normale: 'bg-slate-800/0'
},

{
    elemento: 'normal',
    selezionato: 'bg-gray-300',
    normale: 'bg-slate-800/0'
},
{
    elemento: 'flying',
    selezionato: 'bg-sky-200',
    normale: 'bg-slate-800/0'
}
]


// funzione reset


function resetSelected() {
    selectedType('')
    loadPokemons(numbers)
    // for (let i = 0; i < bottoni.length; i++) {
    //     const bottone = bottoni[i];
    //     const currentButton = document.getElementById(bottone.elemento)
    //     currentButton.remove(bottone.selezionato)
    // }


}

async function selectedType(elemento) {
    for (let i = 0; i < bottoni.length; i++) {
        const bottone = bottoni[i];
        if (bottone.elemento === elemento) {
            console.log('sono dentro if')
            const currentButton = document.getElementById(bottone.elemento)
            currentButton.classList.remove(bottone.normale)
            currentButton.classList.add(bottone.selezionato)


        }
        else {
            console.log('sono dentro  secondo else')
            const currentButton = document.getElementById(bottone.elemento)
            currentButton.classList.remove(bottone.selezionato)
            currentButton.classList.add(bottone.normale)
        }
    }
    console.log('qui stampo')
    loadSortedPokemons(numbers, elemento)

}


// qui carichi i pokemon appena sono pronti
loadPokemons(numbers)




// metti la 1° lettera maiuscola
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//  se premo invio parte l'evento
// document.getElementById('searchPokemon').addEventListener('change', function (event) {
//     contenitore.innerHTML = ''
//     // console.log('valore: ',  event.target.value)

//     const userChoice = event.target.value.toLowerCase()
//     if (userChoice === '') {
//         loadPokemons(numbers)
//     } else {
//         callPokemon(userChoice)
//     }
// })





// search by pokemon name 
document.getElementById('searchPokemon').addEventListener('input', function (event) {
    contenitore.innerHTML = ''
    // set lowercase 
    const userChoice = event.target.value.toLowerCase()
    if (userChoice === '') {

        loadPokemons(numbers)
    } else {
        callPokemon(userChoice)
    }
})










// funzione che prende pokemon da call pokemon rispetto al nome e lo mostra a schermo











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
            return 'bg-indigo-400'
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




