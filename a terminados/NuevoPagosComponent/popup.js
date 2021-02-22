var popUp=document.getElementById('box-formulario');
var abrirPopUp = document.getElementById('button-popup');
var cerrarPopUp = document.getElementById('btn-close-popup');
let myFile = document.getElementById('myFile');
let dropZoneElement2 = document.querySelector(".drop-zone");
let dropZoneElement = document.getElementsByClassName('drop-zone');


abrirPopUp.onclick = function(){
    popUp.style.display = "flex";
}
cerrarPopUp.onclick = function(){
    popUp.style.display = "none";  
}