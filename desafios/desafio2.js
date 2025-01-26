/*1.Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
let altura = parseFloat(prompt("Inresa tu altura en metros"));
let peso = parseFloat(prompt("Inresa tu peso en kilogtamos"));

function masaCorporal(h,w) {

    imc = w/(h*h);
    
    alert(`El IMC segun tu altura ${h} y tu peso ${w} es : ${imc}`);
}
masaCorporal(altura,peso);
*/
/*2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.

let numero = 0;
do {
    numero = parseInt(prompt("Ingrese un número no negativo para calcular su factorial:"));
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, ingrese un número válido (no negativo).");
    }
} while (isNaN(numero) || numero < 0);

function factorial(numero) {
       
    if(numero > 0){
        return numero*factorial(numero-1);
    }
    else if(numero == 0){
        return 1;
    } 
}
let resultado = factorial(numero);
alert(`El factorial de ${numero} es ${resultado}`);
*/