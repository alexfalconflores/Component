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
    myFile.value = "";
    console.log("Valor es" + myFile.value)
    // let thumbnailElement = dropZoneElement2.querySelector(".drop-zone__thumb");
    // dropZoneElement2.removeChild(thumbnailElement);
    try {
        dropZoneElement2.querySelector(".drop-zone__thumb").remove();
        let span = dropZoneElement2.querySelector("drop-zone__prompt");
        if (!span) {
            span = document.createElement("span");
            span.classList.add("drop-zone__prompt");
            span.textContent = "Arrastre y suelte su archivo o haga click sobre mi para cargar";
            dropZoneElement2.appendChild(span);
        }
    } catch {
        
    }
    
    
}