const hoja = document.querySelector("#contenedorDivs");
const inputSize = document.getElementById("inputSize");
const btnGenerar = document.getElementById("btnGenerar");
const btnBorrar = document.getElementById("btnBorrar");

function crearHoja(size) {
    hoja.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    hoja.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        const casilla = document.createElement("div");
        casilla.classList.add("grid-casilla");
        
        casilla.addEventListener("mouseover", () => {
            casilla.classList.add("hovered");
        });
        
        hoja.appendChild(casilla);
    }
}

crearHoja(16);

btnGenerar.addEventListener("click", () => {
    const size = parseInt(inputSize.value);

    if(size > 100) {
        alert("El tamaño maximo posible es de 100x100");
        return;
    }

    hoja.innerHTML = "";
    crearHoja(size);
});

btnBorrar.addEventListener("click", () => {
    hoja.innerHTML = "";
    crearHoja(16);
});