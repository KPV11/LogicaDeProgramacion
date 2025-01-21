let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function consoleButton(){
    alert('El boton fue clickeado');
}

function preguntaCiudad(){
    let ciudad = prompt("Mencioname un nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acorde de ti`);
}

function amojs(){
    alert('Yo amo JS');
}

function suma(){
    let numero1 = parseInt(prompt("Ingrese el primero numero: "));
    let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
    let suma;

    suma = numero1 + numero2;

    alert(`la suma es: ${suma}`);
}