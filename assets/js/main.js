//==========FETCH MODULE===============/
async function fetchModule(selector){
    const root= "https://swapi.py4e.com/api/"
    let url;
    switch(selector){
    case "films":
    case "people":
    case "planets":
    case "species":
    case "vehicles":
    case "spaceships":
        url= root + selector +"/";
        break;
    default:
        url= selector;
    }
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); 
}
//==========OBJECTS====================//
const botonHome=document.getElementById("contenedorlogo")
const checkbox = function(){document.getElementById("mobile-navbar").checked=false}
const botones=[
//Nav buttons //
    {dom:document.getElementById("films"),
    selector: "films"},
    {dom:document.getElementById("people"),
    selector: "people"},
    {dom:document.getElementById("planets"),
    selector: "planets"},
    {dom:document.getElementById("species"),
    selector: "species"},
    {dom:document.getElementById("vehicles"),
    selector: "vehicles"},
    {dom:document.getElementById("spaceships"),
    selector: "spaceships"},
// Main Screen Buttons //
    {dom:document.getElementById("default-films"),
    selector: "films"},
    {dom:document.getElementById("default-people"),
    selector: "people"},
    {dom:document.getElementById("default-planets"),
    selector: "planets"},
    {dom:document.getElementById("default-species"),
    selector: "species"},
    {dom:document.getElementById("default-vehicles"),
    selector: "vehicles"},
    {dom:document.getElementById("default-spaceships"),
    selector: "spaceships"}

]

const contenedores =[
    document.getElementById("default"), /* default */
    document.getElementById("contenedor-busqueda"), /* busqueda */
    document.getElementById("ficha-films"), /* fichaFilms */
    document.getElementById("ficha-people"), /* fichaPeople */
    document.getElementById("ficha-planets"), /* fichaPlanets */
    document.getElementById("ficha-species"), /* fichaSpecies */
    document.getElementById("ficha-vehicles"), /* fichaVehicles */
    document.getElementById("ficha-starships"), /* fichaStarships */
]
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
//=================================================================//
//=================================================================//
//==============VARIABLES==============//

var selection; //films,people,planets,species,vehicles,starships

//==============FUNCIONS===============//

//Funcion para mostar y ocultar dinamicamente los contenedores//
const hidecontent = function(visible){
    for(let i of contenedores){
        i.setAttribute("class","hidden")
    } 
    contenedores[visible].setAttribute("class","default");
}

//==================SCRIPTS============//

//BOTONES PRINCIPALES ON-CLICK//

botonHome.onclick = function(){
    selection="";
    hidecontent(0);
    checkbox();
}
for(let i of botones){
    i.dom.onclick= function(){
    selection=i.selector;
    hidecontent(1);
    checkbox();
    }
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