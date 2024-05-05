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
    case "starships":
        url= root + selector +"/";
        break;
    default:
        url= selector;
    }
    const response = await fetch(url);
    const data = await response.json();
/*     console.log(data) */
    return data
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
    selector: "starships"},
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
    selector: "starships"}

]

const contenedores ={
    default:document.getElementById("default"), /* default */
    busqueda:document.getElementById("contenedor-busqueda"), /* busqueda */
    films:document.getElementById("ficha-films"), /* fichaFilms */
    people:document.getElementById("ficha-people"), /* fichaPeople */
    planets:document.getElementById("ficha-planets"), /* fichaPlanets */
    species:document.getElementById("ficha-species"), /* fichaSpecies */
    vehicles:document.getElementById("ficha-vehicles"), /* fichaVehicles */
    starships:document.getElementById("ficha-starships"), /* fichaStarships */
}
const busqueda = [
    document.getElementById("siguiente"),
    document.getElementById("anterior"),
]
const fichas = {
    films:{
        title:document.getElementById("f-name"),
        image:document.getElementById("f-image"),
        director:document.getElementById("f-director"),
        characters:document.getElementById("f-characters"),
        planets:document.getElementById("f-planets"),
        starships:document.getElementById("f-starships"),
        species:document.getElementById("f-species"),
        opening_crawl:document.getElementById("f-paragraph"),
    },
    people:{
        name:document.getElementById("p-name"),
        image:document.getElementById("p-image"),
        birth_year:document.getElementById("p-birth"),
        gender:document.getElementById("p-gender"),
        species:document.getElementById("p-species"),
        height:document.getElementById("p-height"),
        mass:document.getElementById("p-mass"),
        hair_color:document.getElementById("p-hair"),
        skin_color:document.getElementById("p-skin"),
        eye_color:document.getElementById("p-eye"),
        homeworld:document.getElementById("p-homeworld"),
        films:document.getElementById("p-films"),
        starships:document.getElementById("p-starships"),
        vehicles:document.getElementById("p-vehicles"),
    },
    planets:{
        name:document.getElementById("pl-name"),
        image:document.getElementById("pl-image"),
        diameter:document.getElementById("pl-diameter"),
        rotation_period:document.getElementById("pl-rotation"),
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
        films:document.getElementById("sp-films"),
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
        films:document.getElementById("v-films"),
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
    }
}
//=================================================================//
//=================================================================//
//==============VARIABLES==============//

var selection; //films,people,planets,species,vehicles,starships

//==============FUNCIONS===============//

//Funcion para mostar y ocultar dinamicamente los contenedores//
const hideContent = function(visible){
    const keys= Object.keys(contenedores)
    for(let i of keys){
        contenedores[i].setAttribute("class","hidden")
    }
    contenedores[visible].setAttribute("class","default");
}
const fileConstructor = (selector,data)=>{
    hideContent((selector))
    const keys = Object.keys(fichas[selection])
    console.log(data)
    for(let i=0; i<keys.length; i++){
        fichas[selector][keys[i]].innerHTML=" "
        fichas[selector][keys[i]].insertAdjacentHTML("beforeend",data[keys[i]]?data[keys[i]]:"Not Available")

    }
    console.log(data["vehicles"])
}

const resultConstructor =(data)=>{
    //Declare destiny div for each result element
    const busquedaint=document.getElementById("busqueda")
    //Result cleanup
    busquedaint.innerHTML =""
    //Append result 
    const resultData = data.results 
    for(let i=0; i<resultData.length;i++){
        let keys = Object.keys(fichas[selection])
        busquedaint.insertAdjacentHTML("beforeend",`
        <div id="r-${i}" class="default-contents"><img src="./assets/img/${selection}/${resultData[i][keys[0]].replace(" ","%20")}.jpg"><p>${resultData[i][keys[0]]}</p></div>
        `)
        document.getElementById(`r-${i}`).addEventListener("click",()=>{
            fetchModule(resultData[i].url).then((data)=>fileConstructor(selection,data))
            /* fileConstructor(selection,fetchModule(resultData[i].url)) */
        })
    }
    //Next - Previous buttons
    //Next
    if(!data.next){
busqueda[0].setAttribute("class","hidden")
    }else{
busqueda[0].setAttribute("class","")    
busqueda[0].setAttribute("data-url",data.next)
    }
    //Previous
    if(!data.previous){
busqueda[1].setAttribute("class","hidden")
    }else{
busqueda[1].setAttribute("class","")  
busqueda[1].setAttribute("data-url",data.previous)  
    }


}



//==================SCRIPTS============//

//BOTONES PRINCIPALES ON-CLICK//

botonHome.onclick = function(){
    selection="";
    hideContent("default");
    checkbox();
}
for(let i of botones){
    i.dom.onclick= function(){
    selection=i.selector;
    hideContent("busqueda");
    checkbox();
    fetchModule(selection).then((data)=>{resultConstructor(data)})
    }
}

//Boton Next-Previos
for(let i of busqueda){
    i.onclick = function(){
        fetchModule(i.dataset.url).then((data)=>{resultConstructor(data)}) 
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