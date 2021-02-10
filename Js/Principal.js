var recoDBtienda="";
var DOMselectmetodo = document.getElementById("zona_carga");

crearcontenido(DOMselectmetodo, "p", "Elige el metodo para realizar AJAX:");

crearcontenido(DOMselectmetodo, "button", "XHR");
crearcontenido(DOMselectmetodo, "button", "Fetch");
crearcontenido(DOMselectmetodo, "button", "JQuery");

function crearcontenido(padre, cajacreada, textocaja) {
    let elementointerno = document.createElement(cajacreada);
    let textelemento = document.createTextNode(textocaja)
    elementointerno.appendChild(textelemento);
    padre.appendChild(elementointerno);
}

DOMselectmetodo.getElementsByTagName("button")[0].addEventListener("click", conectarXHR);
DOMselectmetodo.getElementsByTagName("button")[1].addEventListener("click", conectarFetch);
DOMselectmetodo.getElementsByTagName("button")[2].addEventListener("click", conectarJQuery);


function conectarXHR() {
    alert("Hola 1");
    var XHR=new XMLHttpRequest();
    XHR.open("get",recoDBtienda);
    XHR.send();
}

function conectarFetch() {
    alert("Hola 2");
    var Fetch=new fetch(recoDBtienda);
}

function conectarJQuery() {
    alert("Hola 3");
}