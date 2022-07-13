let contador = 0;

function incrementarNumero(){
    updateDisplay(++contador);
}

function decrementarNumero(){
    updateDisplay(--contador);
}

function resetNumero(){
    contador = 0;
    updateDisplay(contador);
}

function updateDisplay(numero){
    document.getElementById("contador").innerHTML = numero;
}