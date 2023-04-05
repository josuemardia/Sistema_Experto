import {hechos} from './hechos.js';
import {reglas} from './reglas.js';
import {validar} from './validaciones.js'

// import {validaciones} from './validaciones.js'


let regla = new reglas();

function Lectura(){

    //ASIGNANDO LOS TEXTBOX CON LAS VARIABLES PARA EL ANALISIS FISICO QUIMICO
    let alcalinidadTxt     = document.getElementById("alcalinidad").value;
    let clorurosTxt        = document.getElementById("cloruros").value;
    let durezaTotalTxt     = document.getElementById("durezaTotal").value;
    let durezaCalcicaTxt   = document.getElementById("durezaCalcica").value;
    let durezaMagnesicaTxt = document.getElementById("durezaMagnesica").value;
    let acidezTxt          = document.getElementById("acidez").value;
    let  solidosTotalesTxt  = document.getElementById("solidosTotales").value;

    
    // ASIGANANDO LOS TEXTBOX CON LAS VARIABLES PARA EL ANALISIS BACTERIOLOGICO
    let  toctxt          = document.getElementById("toc").value;
    let  bacteriastxt    = document.getElementById("bacterias").value;
    let  endotoxinastxt  = document.getElementById("endotoxinas").value;
    let  nucleasastxt    = document.getElementById("nucleasas").value;


    console.log(toctxt);

    let anali1= regla.RulerFisicoQuimico(alcalinidadTxt, clorurosTxt, durezaCalcicaTxt, durezaMagnesicaTxt, durezaTotalTxt, acidezTxt, solidosTotalesTxt);
    let anali2= regla.RulerMicrobiologico(toctxt, bacteriastxt, endotoxinastxt, nucleasastxt);
    regla.Analizador(anali1, anali2);
    
}

let buttonAction = document.getElementById("app_form_buttom");

buttonAction.addEventListener("click", ()=>{
    Lectura();
    validar(alcalinidadTxt, clorurosTxt, durezaCalcicaTxt, durezaMagnesicaTxt, durezaTotalTxt, acidezTxt, solidosTotalesTxt, toctxt, bacteriastxt, endotoxinastxt, nucleasastxt);
});


