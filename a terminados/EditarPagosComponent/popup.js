var popUp=document.getElementById('box-formulario');
var abrirPopUp = document.getElementById('button-popup');
var cerrarPopUp = document.getElementById('btn-close-popup');


abrirPopUp.onclick = function(){
    popUp.style.display = "flex";
}
cerrarPopUp.onclick = function(){
    popUp.style.display = "none";
}