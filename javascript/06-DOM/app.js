// let segundero=0
// let inicio;

// const playSegundero=()=>{
//   console.log(segundero+=1)
// }

// const comienzo=()=>{
//   inicio=setInterval(playSegundero, 1000)
// }

// const detener=()=>{
//   clearInterval(inicio)
//   segundero=0
// }

// setTimeout(()=>{
// location.replace('https://google.com')
// },3000)

let titulo = document.querySelector("h1");
let parrafito = document.querySelector("#parrafo");
let textInput = document.querySelector("#inputText");

let boton = document.querySelector("button");

// parrafito.innerHTML='Párrafo dinámico'

let texto =
  "Nota: del ejemplo anterior; El super()método se refiere a la clase principal. Al llamar al super()método en el método constructor, llamamos al método constructor del padre y obtenemos acceso a las propiedades y métodos del padre.";

const mostrarText = () => {
  document.body.insertBefore(parrafito, boton); //para agregarlo nuevamente si fue removido antes del nodo boton
  parrafito.innerHTML = texto;
};

const ocultar = () => {
  document.body.removeChild(parrafito); //Elimina el nodo
  // parrafito.innerHTML=""
};

const cambiarTitulo = () => {
  if (textInput.value === "") {
    titulo.innerText = "Hola mundo";
  } else {
    titulo.innerText = textInput.value;
  }
};

// textInput.addEventListener('change',cambiarTitulo)
textInput.addEventListener("keyup", cambiarTitulo);
