// const container = document.querySelector("#container");


// const content = document.createElement("div");

// content.classList.add("content");

// content.textContent = "This is the glorious text-content!";

// container.appendChild(content);


//<p>

const contentP = document.createElement("p");

contentP.textContent = "¡Hola, soy rojo!"

contentP.style.color = "red"

document.body.appendChild(contentP);

//<h3>

const contentH3 = document.createElement("h3");

contentH3.textContent = "¡Soy un h3 azul!";

contentH3.style.color = "blue";

document.body.appendChild(contentH3);

//<div>

const contentDiv = document.createElement("div")

contentDiv.style.border = "1px solid black";

contentDiv.style.backgroundColor = "pink";

//<h1> dentro de <div>

const contentH1 = document.createElement("h1");

contentH1.textContent = "Estoy en un div";

const contentP2 = document.createElement("p");

contentP2.textContent = "YO TAMBIÉN!"


contentDiv.appendChild(contentH1);
contentDiv.appendChild(contentP2);

document.body.appendChild(contentDiv);

//EVENTO BOTON

//METODO 2
const btn = document.querySelector("#btn");

btn.onclick = () => alert('Hello World');

//METODO 3
const btn2 = document.querySelector("#btn2");

btn.addEventListener("click", () =>{
    alert('Hello World');
});