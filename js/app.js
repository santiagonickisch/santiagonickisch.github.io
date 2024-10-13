// MENU LATERAL

var menu_visible = false;

let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    if (menu_visible==false) { //Si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Oculto el menu una vez que selecciono una opcion

let links = document.querySelectorAll("nav a");
for (var x = 0; x <links.length; x++) {
    links[x].onclick = function() {
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Creo las barritas de una barra particular identificada por su id

function crearBarra(id_barra) {
    for (i=0; i<=16; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Seleciiono todas las barras generales para luego manipularlas

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let python = document.getElementById("python");
crearBarra(python);
let git = document.getElementById("git");
crearBarra(git);
let sql = document.getElementById("sql");
crearBarra(sql);

//Ahora voy a guardar las cantidades de barritas que se van a ir pintando por cada barra
//para eso utilizo un arreglo, cada posicion pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse

let contadores = [-1,-1,-1,-1,-1,-1]

//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animacion

let entro = false;

//funcion que aplica las animaciones de las habilidades

function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if (distancia_skills>=300 && entro==false) {
        entro = true;
        const intervalHtml = setInterval(function() {
            pintarBarra(html, 13, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function() {
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalPython = setInterval(function() {
            pintarBarra(python, 11, 2, intervalPython);
        },100);
        const intervalGit = setInterval(function() {
            pintarBarra(git, 9, 3, intervalGit);
        },100);
        const intervalSql = setInterval(function() {
            pintarBarra(sql, 11, 4, intervalSql);
        },100);
    }
}

//Lleno una barra particular con la cantidad indicada

function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#2adfd6";
    } else {
        clearInterval(interval)
    }
}

//Detecto el scrolling del mouse para aplicar la animacion de la barra

window.onscroll = function() {
    efectoHabilidades();
}