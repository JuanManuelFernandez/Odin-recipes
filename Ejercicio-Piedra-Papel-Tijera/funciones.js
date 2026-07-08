let puntajeComputadora = 0;
let puntajeHumano = 0;
let contadorRondas = 0;


const containerReset = document.querySelector("#containerReset");
const btnReiniciar = document.createElement("button");

btnReiniciar.textContent = "Reiniciar";

btnReiniciar.style.color = "red";

function getComputerChoice () {
    const numeroRandom = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    let eleccion;

    if (numeroRandom == 1) {
        eleccion = "Piedra";
    }
    else if (numeroRandom == 2) {
        eleccion = "Papel";
    }
    else {
        eleccion = "Tijera";
    }
    
    return eleccion;
}

function getHumanChoice () {
    const btnPiedra = document.querySelector("#piedra");
    const btnPapel = document.querySelector("#papel");
    const btnTijera = document.querySelector("#tijera");

    btnPiedra.addEventListener("click", () => jugarPartida("Piedra"));
    btnPapel.addEventListener("click", () => jugarPartida("Papel"));
    btnTijera.addEventListener("click", () => jugarPartida("Tijera"))

}

function validarGanador (computadora, humano) {
     //EMPATE
    if(humano == computadora) {
    }
    // PIEDRA DE HUMANO VS TIJERA COMPUTADOR
    else if(humano == "Piedra" && computadora == "Tijera"){
        puntajeHumano ++;
    }
    //PIEDRA COMPUTADORA VS TIJERA HUMANO
    else if (computadora == "Piedra" && humano == "Tijera") {
        puntajeComputadora++;
    }
    //PAPEL HUMANO VS PIEDRA COMPUTADORA
    else if(humano == "Papel" && computadora == "Piedra") {
        puntajeHumano++;
    }
    //PAPEL COMPUTADORA VS PIEDRA HUMANO
    else if(computadora == "Papel" && humano == "Piedra") {
        puntajeComputadora++;
    }
    //TIJERA HUMANO VS PAPEL COMPUTADORA
    else if(humano == "Tijera" && computadora == "Papel") {
        puntajeHumano++;
    }
    //TIJERA COMPUTADORA VS PAPEL HUMANO
    else if(computadora == "Tijera" && humano == "Papel") {
        puntajeComputadora++
    }
}

function jugarPartida(eleccionHumano) {
    const eleccionComputadora = getComputerChoice();

    validarGanador(eleccionHumano, eleccionComputadora);

    document.getElementById("resultado").textContent = "Tú: " + puntajeHumano + " - " + "Computadora: " + puntajeComputadora;
    contadorRondas++
    if(contadorRondas == 5) {
        let mensaje = document.getElementById("fin");
        if(puntajeComputadora > puntajeHumano){
            mensaje.textContent = "La computadora ha ganado";
        }
        else if(puntajeHumano > puntajeComputadora) {
            mensaje.textContent = "¡Has ganado!";
        }
        else {
            mensaje.textContent = "Empate";
        }
        containerReset.appendChild(btnReiniciar);
        return;
    }
}

function reiniciarPartida() {
    puntajeHumano= 0;
    puntajeComputadora = 0;
    contadorRondas = 0;

    document.getElementById("resultado").textContent = "";
    document.getElementById("fin").textContent = "";

    containerReset.removeChild(btnReiniciar);
}

btnReiniciar.addEventListener("click", () => reiniciarPartida());

getHumanChoice();