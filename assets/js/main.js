//==========SWAPI MODULE===============/

import {swapiModule} from "./swapi.js"

//==========OBJECTS====================//
const botonHome=document.getElementById("contenedorlogo")
const botonesNav={
    films:document.getElementById("films"),
    people:document.getElementById("people"),
    planets:document.getElementById("planets"),
    species:document.getElementById("species"),
    vehicles:document.getElementById("vehicles"),
    spaceships:document.getElementById("spaceships"),
    checkbox: function(){document.getElementById("mobile-navbar").checked=false},
}
const botonesMain={
    films:document.getElementById("default-films"),
    people:document.getElementById("default-people"),
    planets:document.getElementById("default-planets"),
    species:document.getElementById("default-species"),
    vehicles:document.getElementById("default-vehicles"),
    spaceships:document.getElementById("default-spaceships"),
}
const contenedores ={
    default: document.getElementById("default"),
    busqueda: document.getElementById("contenedor-busqueda"),
    fichaFilms: document.getElementById("ficha-films"),
    fichaPeople: document.getElementById("ficha-people"),
    fichaPlanets: document.getElementById("ficha-planets"),
    fichaSpecies: document.getElementById("ficha-species"),
    fichaVehicles: document.getElementById("ficha-vehicles"),
    fichaStarships: document.getElementById("ficha-starships"),
}
const busqueda = {
    content:[
        document.getElementById("r0"),
        document.getElementById("r1"),
        document.getElementById("r2"),
        document.getElementById("r3"),
        document.getElementById("r4"),
        document.getElementById("r5"),
        document.getElementById("r6"),
        document.getElementById("r7"),
        document.getElementById("r8"),
        document.getElementById("r9"),
    ],
    img:[
        document.getElementById("r0img"),
        document.getElementById("r1img"),
        document.getElementById("r2img"),
        document.getElementById("r3img"),
        document.getElementById("r4img"),
        document.getElementById("r5img"),
        document.getElementById("r6img"),
        document.getElementById("r7img"),
        document.getElementById("r8img"),
        document.getElementById("r9img"),
    ],
    url:[
        document.getElementById("r0url"),
        document.getElementById("r1url"),
        document.getElementById("r2url"),
        document.getElementById("r3url"),
        document.getElementById("r4url"),
        document.getElementById("r5url"),
        document.getElementById("r6url"),
        document.getElementById("r7url"),
        document.getElementById("r8url"),
        document.getElementById("r9url"),
    ],
    siguiente: document.getElementById("siguiente"),
    anterior: document.getElementById("anterior"),
}
const fichas = {
    films:{
        name:document.getElementById("f-name"),
        image:document.getElementById("f-image"),
        director:document.getElementById("f-director"),
        characters:document.getElementById("f-characters"),
        planets:document.getElementById("f-planets"),
        starships:document.getElementById("f-starships"),
        species:document.getElementById("f-species"),
        paragraph:document.getElementById("f-paragraph"),
    },
    people:{
        name:document.getElementById("p-name"),
        image:document.getElementById("p-image"),
        birth:document.getElementById("p-birth"),
        gender:document.getElementById("p-gender"),
        species:document.getElementById("p-species"),
        height:document.getElementById("p-height"),
        hair:document.getElementById("p-hair"),
        skin:document.getElementById("p-skin"),
        eye:document.getElementById("p-eye"),
        homeworld:document.getElementById("p-homeworld"),
        films:document.getElementById("p-films"),
        starships:document.getElementById("p-starships"),
        vehicles:document.getElementById("p-vehicles"),
    },
    planets:{
        name:document.getElementById("pl-name"),
        image:document.getElementById("pl-image"),
        diameter:document.getElementById("pl-diameter"),
        rotation:document.getElementById("pl-rotation"),
        gravity:document.getElementById("pl-gravity"),
        population:document.getElementById("pl-population"),
        climate:document.getElementById("pl-climate"),
        terrain:document.getElementById("pl-terrain"),
        water:document.getElementById("pl-water"),
        residents:document.getElementById("pl-residents"),
        films:document.getElementById("pl-films"),
    },
    species:{
        name:document.getElementById("sp-name"),
        image:document.getElementById("sp-image"),
        classification:document.getElementById("sp-classification"),
        designation:document.getElementById("sp-designation"),
        height:document.getElementById("sp-height"),
        lifespan:document.getElementById("sp-lifespan"),
        eyes:document.getElementById("sp-eyes"),
        hair:document.getElementById("sp-hair"),
        skin:document.getElementById("sp-skin"),
        language:document.getElementById("sp-language"),
        homeworld:document.getElementById("sp-homeworld"),
        people:document.getElementById("sp-people"),
        name:document.getElementById("sp-films"),
    },
    vehicles:{
        name:document.getElementById("v-name"),
        image:document.getElementById("v-image"),
        model:document.getElementById("v-model"),
        class:document.getElementById("v-class"),
        manufacturer:document.getElementById("v-manufacturer"),
        lenght:document.getElementById("v-lenght"),
        cost:document.getElementById("v-cost"),
        crew:document.getElementById("v-crew"),
        passengers:document.getElementById("v-passengers"),
        speed:document.getElementById("v-speed"),
        capacity:document.getElementById("v-capacity"),
        name:document.getElementById("v-films"),
        name:document.getElementById("v-pilots"),
    },
    starships:{
        name:document.getElementById("s-name"),
        image:document.getElementById("s-image"),
        model:document.getElementById("s-model"),
        class:document.getElementById("s-class"),
        manufacturer:document.getElementById("s-manufacturer"),
        lenght:document.getElementById("s-lenght"),
        cost:document.getElementById("s-cost"),
        crew:document.getElementById("s-crew"),
        passengers:document.getElementById("s-passengers"),
        speed:document.getElementById("s-speed"),
        hyper:document.getElementById("s-hyper"),
        capacity:document.getElementById("s-capacity"),
        films:document.getElementById("s-films"),
        pilots:document.getElementById("s-pilots"),
    }
}

//==============VARIABLES==============//

var page; //1 by default
var selection; //films,people,planets,species,vehicles,starships
var id; //aqui ira el ID del elemento seleccionado.

//==============FUNCIONS===============//

//Funcion para mostar y ocultar dinamicamente los contenedores//
const hidecontent = function(visible){
    contenedores.default.setAttribute("class","hidden")
    contenedores.busqueda.setAttribute("class","hidden")
    contenedores.fichaFilms.setAttribute("class","hidden")
    contenedores.fichaPeople.setAttribute("class","hidden")
    contenedores.fichaPlanets.setAttribute("class","hidden")
    contenedores.fichaSpecies.setAttribute("class","hidden")
    contenedores.fichaVehicles.setAttribute("class","hidden")
    contenedores.fichaStarships.setAttribute("class","hidden")
    switch (visible){
        case "default":
            contenedores.default.setAttribute("class","default");
            break;
        case "busqueda":
            contenedores.busqueda.setAttribute("class","default");
            break;
        case "films":
            contenedores.fichaFilms.setAttribute("class","default");
            break;
        case "people":
            contenedores.fichaPeople.setAttribute("class","default");
            break;
        case "planets":
            contenedores.fichaPlanets.setAttribute("class","default");
            break;
        case "species":
            contenedores.fichaSpecies.setAttribute("class","default");
            break;
        case "vehicles":
            contenedores.fichaVehicles.setAttribute("class","default");
            break;
        case "starships":
            contenedores.fichaStarships.setAttribute("class","default");
            break;
        default:
            contenedores.default.setAttribute("class","default");
            console.log("Funcion hidecontent no funciona correctamente") 
    }
}

//==================SCRIPTS============//

//BOTONES PRINCIPALES ON-CLICK//

botonHome.onclick = function(){
    selection=""
    page=1
    hidecontent("default")
    botonesNav.checkbox()
}
botonesNav.films.onclick = function(){
    selection="films"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesMain.films.onclick = function(){
    selection="films"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesNav.people.onclick = function(){
    selection="people"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesMain.people.onclick = function(){
    selection="people"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesNav.planets.onclick = function(){
    selection="planets"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesMain.planets.onclick = function(){
    selection="planets"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesNav.species.onclick = function(){
    selection="species"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesMain.species.onclick = function(){
    selection="species"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesNav.vehicles.onclick = function(){
    selection="vehicles"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesMain.vehicles.onclick = function(){
    selection="vehicles"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesNav.spaceships.onclick = function(){
    selection="starships"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}
botonesMain.spaceships.onclick = function(){
    selection="starships"
    page=1
    hidecontent("busqueda")
    botonesNav.checkbox()
}


//////////////// PRUEBA DE LA FUNCIONALIDAD DE PROMESAS.///////////////////////
/* const data = function(id){swapiModule.getPlanet(id).then(res => fn(res))
}
data(2)
const fn = function(scr){
    botonesNav.films.innerHTML=scr.name
} */


//////////////// RECURSOS INDIVIDUALES/////////////////////////////
/* const asd = swapiModule.getResource("https://swapi.dev/api/films/2/")
console.log(asd) */