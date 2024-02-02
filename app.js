//let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 10;
let numerosSorteados = [];
function asignarElemento(elemento , texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}
condicionesInicio();
function funcionIntentar(){
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    intentos++
    if (numeroUsuario===numeroGenerado) {
        asignarElemento(`p`, `Acertaste el numero secreto en ${intentos} ${intentos==1?"intento":"Intentos"}`);       
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroUsuario>numeroGenerado){
            asignarElemento('p', "El numero secreto es menor");

        }else{
            asignarElemento('p', "El numero secreto es mayor");

        }
        limpiarCaja();
    }

    }

function limpiarCaja() {
    document.getElementById('numeroUsuario').value="";
}
function condicionesInicio() {
    asignarElemento('h1', "Juego numero secreto");
    asignarElemento('p', `Ingresa un numero de 1 al ${numeroMaximo}`);
    numeroGenerado = numeroAletorio();
    intentos = 0;
    console.log(numeroGenerado);

}

function numeroAletorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    if(numerosSorteados.length == numeroMaximo){
        asignarElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        if(numerosSorteados.includes(numeroGenerado)){
            return numeroAletorio();

        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesInicio();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

