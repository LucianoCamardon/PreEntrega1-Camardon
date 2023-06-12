const TND = 0.14583;  //Tasa nominal dolar por cada mes (para plazo fijo UVA tamb)
const TNT=8.083;  //Tasa nominal tradicional por cada mes
const inflacionMes = 9;  
let tipoDePlazo;
let moneda;
let montoEnPesos;
let montoEnDolares;
let plazo;
let correrProgramaDeNuevo;
let plata;
let tiempo;
let interés;

calcularPlazo();

function elegirTipoDeMoneda(){
    do{
        moneda = prompt('Escriba "P" o "D" según quiera usar Pesos o Dólares como moneda').toLowerCase()
        if(moneda!="p" && moneda!="d"){
            alert('Por favor profe, escribí "P" o "D"')
        }
    }while(moneda!="p" && moneda!="d")
    return moneda;
}

function elegirTipoDePlazo(){
    do{
        tipoDePlazo=prompt('Escriba "TRAD" o "UVA" según el tipo de plazo fijo que desee').toLowerCase()
        if(tipoDePlazo!="trad" && tipoDePlazo!= "uva"){
            alert('Por favor, escriba "TRAD" o "UVA"')
        }
    }while(tipoDePlazo!="trad"&&tipoDePlazo!="uva")   
    return tipoDePlazo; 
}

function ingresarMontoPesos(){
    do{
        montoEnPesos=prompt('ingrese un monto mayor a 1.000 pesos')
        if(montoEnPesos<1000 || isNaN(montoEnPesos))
            alert("Por favor, ingrese un NÚMERO mayor a 1000")
    }while(montoEnPesos<1000 || isNaN(montoEnPesos))
    return montoEnPesos;
}
function ingresarMontoDolares(){
    do{
        montoEnDolares=prompt('ingrese un monto mayor a 100')
        if(montoEnDolares<100 || isNaN(montoEnDolares)){
            alert('dale profe, ingresá un NÚMERO que sea MAYOR a 100')
        }
    }
    while(montoEnDolares<100 || isNaN(montoEnDolares))
    return montoEnDolares;
}

function cantidadDeMeses(){
    do{
        plazo=prompt('Ingrese un número del 1 al 12 según la cantidad de meses que desee que dure el plazo.')
        if(!Number.isInteger(parseFloat(plazo))){
            alert("Por favor, ingrese una cantidad de meses sin decimales.")
        }
        else if(parseInt(plazo)>12){
            alert('Por favor, ingrese una cantidad de meses igual o inferior a 12')
        }
    }while(!Number.isInteger(parseFloat(plazo)) || parseInt(plazo)>12)
    return plazo;
}

function calculoFinalPesos(plata, tiempo, interés){
    alert("Al cabo de " + tiempo + " mes/meses su plazo sería de " + plata * (1 + tiempo * interés/100).toFixed(2) + " pesos")
}
function calculoFinalDolares(plata, tiempo, interés){
    alert("Al cabo de " + tiempo + " mes/meses su plazo sería de " + plata * (1 + tiempo * interés/100).toFixed(2) + " dólares")
}   

function finalizarOReiniciar(){
    correrProgramaDeNuevo=prompt('Si desea realizar otro cálculo ingrese "S". De lo contrario el programa finalizará').toLowerCase()
    if(correrProgramaDeNuevo=="s"){calcularPlazo()}
    else{alert("Gracias por usar mi programa :')")}
}

function calcularPlazo(){

    elegirTipoDeMoneda();
    cantidadDeMeses(); 
    if(moneda=="p"){
        elegirTipoDePlazo();
        ingresarMontoPesos();       

        if(tipoDePlazo=="trad"){
            calculoFinalPesos(montoEnPesos, plazo, TNT);
        }
        else if(tipoDePlazo=="uva"){
            calculoFinalPesos(montoEnPesos, plazo, TND);
        }
    }
    else if(moneda=="d"){
        ingresarMontoDolares();
        calculoFinalDolares(montoEnDolares, plazo, TND);
    }

    finalizarOReiniciar();
}