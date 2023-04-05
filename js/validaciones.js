
function solonumeros(e){
  
    key = e.keyCode || e.which;
    
    teclado = String.fromCharCode(key); s
    numero = "0123456789";
    especiales = "8-37-38-46";
    teclado_especial = false;
    
    for( var i in especiales){
    
    if(key == especiales[i]){
    
    teclado_especial=true;
    
    
    }
    
    }
    
    if(numero.indexOf(teclado)==-1 && !teclado_especial){
    
    return false;
    
    }
    
    

}




export function validar(aP, cP, dCP, dMP, dTP, acP, sP, tP, bP, eP, nP){
if( (aP =="") || (cP =="") || (dCP == "")|| (dMP == "") || (dTP == "") || (aP == "") || (sP == "") || (tP == "") || (bP =="") || (eP == "") || (nP =="")){
  
      document.getElementById("respuesta").innerHTML = "Por Favor ingresar los datos Correspondientes";
  
  
  }
   
  
}
  
  
    