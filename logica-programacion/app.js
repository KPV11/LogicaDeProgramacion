
let intervalo = parseInt(prompt("Digite hasta que numero desde el numero 1 desea adivinar"));
let numeroSecreto = Math.floor(Math.random()*intervalo)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 3;
console.log(numeroSecreto)

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${intervalo} por favor:`));
    console.log(typeof(numeroUsuario));
    /*
    Este codigo realiza la comparación
    */

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero: ${numeroUsuario}. Lo hiciste en ${intentos} ${ intentos == 1 ? 'vez' : 'veces'} `);
   
    }
    else{
        if(numeroUsuario >numeroSecreto ){
            alert('El numero secreto es menor');
        }
        else{
            alert('El numero secreto es mayor');
        }
        
        //alert('No acerto el numero')
    }
    intentos ++;

    if (intentos > maximoIntentos){
        alert(`Llegaste al numero maximo de ${maximoIntentos}`);
        break;
    }
}