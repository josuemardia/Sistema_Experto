import {hechos} from './hechos.js';

export class reglas{

    constructor (){
        // var analizador1=false;
        // var analizador2=false;
    }


    RulerFisicoQuimico( alcalinidadP, clorurosP, durezaCalcicaP, durezaMagnesicaP, durezaTotalP, acidezP, solidosTotalesP) {

        let hecho = new hechos();
        let analizador1=false;
        let ayuda = true;

       console.log(hecho.alcalinidadTotal);

        if (( alcalinidadP < hecho.alcalinidadTotal) && (clorurosP < hecho.cloruros) && (durezaCalcicaP < hecho.durezaCalcica) && (durezaMagnesicaP < hecho.durezaMagnesica) && (durezaTotalP < hecho.durezaTotal) && (acidezP < hecho.acidez) && (solidosTotalesP < hecho.solidosTotales)) {

            ayuda= false;
            analizador1=true;
            document.getElementById("respuesta").innerHTML = "AGUA APTA PARA EL CONSUMO HUMANO";
            console.log("AGUA APTA PARA EL CONSUMO HUMANO");
            
        } 
        
       if (ayuda) {
            document.getElementById("respuesta").innerHTML = "AGUA NO ESTA APTA PARA EL CONSUMO HUMANO";
            console.log(alcalinidadP);
       }

       return analizador1;
    }

   
    
    RulerMicrobiologico(tocP, bacteriasP, endotoxinasP, nucleasasP){
         
        let hecho = new hechos();
        let analizador2=false;
        let ayuda = true;

        console.log(tocP, bacteriasP, endotoxinasP, nucleasasP);
        if( (tocP < hecho.toc) && (bacteriasP <= hecho.bacterias) && (endotoxinasP <= hecho.endotoxinas) &&  (nucleasasP <= hecho.nucleasas)) {
            ayuda=false;
            document.getElementById("respuesta").innerHTML = "AGUA APTA PARA EL CONSUMO HUMANO de Microbios";
            console.log("AGUA APTA PARA EL CONSUMO HUMANO de microbios");
            analizador2=true;

        
        }

        if(ayuda) {
            document.getElementById("respuesta").innerHTML = "AGUA NO ESTA APTA PARA EL CONSUMO HUMANO de microbios";
            // console.log(alcalinidadP);
        }

        return analizador2;
    }



    Analizador(analizador1P, analizador2P){
        

        if (analizador1P==true && analizador2P==true) {
            document.getElementById("respuesta").innerHTML = "LUEGO DEL ANALISIS EL SISTEMA EXPERTO CONCLUYE QUE EL AGUA ES OPTIMA PARA SER CONSUMIDA";
        }

        if (analizador1P==false) {
            document.getElementById("respuesta").innerHTML = "LUEGO DEL ANALISIS EL SISTEMA EXPERTO CONCLUYE QUE EL AGUA NO ES OPTIMA, LOS DATOS FISICO QUIMICOS OBTENIDOS NO SON LOS CORRECTOS PARA EL CONSUMO HUMANO";
        }

        if (analizador2P==false) {
            document.getElementById("respuesta").innerHTML = "LUEGO DEL ANALISIS EL SISTEMA EXPERTO CONCLUYE QUE EL AGUA NO ES OPTIMA, LOS DATOS MICROBIOLOGICOS OBTENIDOS NO SON LOS CORRECTOS PARA EL CONSUMO HUMANO";
        }

        if (analizador1P==false && analizador2P==false) {
            document.getElementById("respuesta").innerHTML = "LUEGO DEL ANALISIS EL SISTEMA EXPERTO CONCLUYE QUE EL AGUA NO ES OPTIMA PARA SER CONSUMIDA DEBIDO A LOSA DATOS FISICO QUIMICOS Y MICROBIOLOGICOS";
        }
    }

    
}