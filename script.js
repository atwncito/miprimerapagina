//alert("Hola este es mi Javascript");

//let nombre = "pablito1";
//nombre = "Pablita";

//var nombre1 = "pablito2";

//const nombre2 = "pablito3"
//nombre = "Pablita3";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//let nombre = "Rodrigo";
//console.log(nombre);

// SELECCIONAR ELEMENTOS

/*contenidoTitulo = "Atun";

let titulo = document.querySelector(".container header .iniciologo h1");
titulo.innerHTML = contenidoTitulo;

 //CONDICIONALES

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre"){
    titulo.innerHTML = "Otro";
} else {
    console.log("no se cumple");
}



let contenidoAcercademi = "About me";

let acercademi = document.querySelector(".seccion-1 .acerca-de h2");
acercademi.innerHTML = contenidoAcercademi;

let textoAcercademi = acercademi.innerText;
console.log(textoAcercademi);

if (textoTitulo == "About me"){
    acercademi.innerHTML = "perreque";
} else {
    console.log("no se cumpleeeee");
}

// FUNCIONES

let nombre = "Lujan";
let ciudad = "Tacuarembó";
let gusto = "Gatos";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `My name is ${nombre}, I was born in ${ciudad} and actually I live in Tambores. I present a great enthusiasm for the ${gusto} and the big ass gothics. I would like to learn about programation to help the society with my knowledge.`;
    
    return contenido;
}

/*parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);*/

let menu_responsive = document.querySelector(".checkbtn");

menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});