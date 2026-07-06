let puntajeComputadora = 0;
let puntajeHumano = 0;

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
    let eleccionHumano = prompt("movimiento a usar: ").toLowerCase().trim();

    if (eleccionHumano === "piedra") return "Piedra";
    if (eleccionHumano === "papel") return "Papel";
    if (eleccionHumano === "tijera") return "Tijera";

    alert("Movimiento inválido, probá de nuevo");
    return getHumanChoice();
}

function validarGanador (computadora, humano) {
    //EMPATE
    if(humano == computadora) {
        console.log("¡EMPATE!")
    }
    // PIEDRA DE HUMANO VS TIJERA COMPUTADOR
    else if(humano == "Piedra" && computadora == "Tijera"){
        console.log("La computadora ha elegido TIJERA ¡has ganado!");
        puntajeHumano ++;
    }
    //PIEDRA COMPUTADORA VS TIJERA HUMANO
    else if (computadora == "Piedra" && humano == "Tijera") {
        console.log("La computadora ha elegido PIEDRA, te ha ganado");
        puntajeComputadora++;
    }
    //PAPEL HUMANO VS PIEDRA COMPUTADORA
    else if(humano == "Papel" && computadora == "Piedra") {
        console.log("La computadora ha elegido PIEDRA ¡le has ganado!");
        puntajeHumano++;
    }
    //PAPEL COMPUTADORA VS PIEDRA HUMANO
    else if(computadora == "Papel" && humano == "Piedra") {
        console.log("La computadora ha elegido PAPEL, te ha ganado");
        puntajeComputadora++;
    }
    //TIJERA HUMANO VS PAPEL COMPUTADORA
    else if(humano == "Tijera" && computadora == "Papel") {
        console.log("La computadora ha elegido PAPEL ¡has ganado!");
        puntajeHumano++;
    }
    //TIJERA COMPUTADORA VS PAPEL HUMANO
    else if(computadora == "Tijera" && humano == "Papel") {
        console.log("La computadora ha elegido TIJERA, te ha ganado");
        puntajeComputadora++
    }

    if(puntajeHumano > puntajeComputadora) {
        console.log("Van " + puntajeHumano + " a " + puntajeComputadora  + " ¡Vas ganando!")
    }
    else {
        console.log("Van " + puntajeHumano + " a " + puntajeComputadora  + " La computadora te esta ganando")
    }
}

function jugarPartida() {
    for(let i = 1; i <= 5; i++) {
        console.log("Ronda " + i);

        const eleccionComputadora = getComputerChoice();
        const eleccionHumanoFinal = getHumanChoice();

        validarGanador(eleccionComputadora, eleccionHumanoFinal);
    }

    console.log("Resultado final");
    console.log("Vos: " + puntajeHumano + " - " + "Computadora: " + puntajeComputadora);
    
    if(puntajeHumano > puntajeComputadora){ñ
        console.log("¡Has ganado la partida!");
    }
    else {
        console.log("Has perdido la partida, suerte la proxima vez");
    }

    return;
}

jugarPartida();
