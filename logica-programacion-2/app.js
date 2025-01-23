let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    //innerHTML para poner el titulo de tipo string
    elementoHTML.innerHTML = texto;
    
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);
    // el === compara no solo el valor sino tambien el tipo de dato sea igual
    console.log(numeroUsuario === numeroSecreto);
    return;
}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p','Indica un número del 1 al 100');

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
    
}