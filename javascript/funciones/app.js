import superheroes from "./superheroes.js";
//Funciones declarativas
function saludar() {
  console.log("Hola como están?");
}

console.log(saludar);

saludar = 30;

console.log(saludar);

//funciones anónimas
const saludar2 = function () {
  console.log("Hola alumnos!!");
};

// let saludar3 = "Pepito";

//Arrow function

const saludar3 = () => "Hola funcion de flecha!!";

const getUsuario = () => ({
  uid: "ABC123",
  username: "winner2021",
});

//funcion traer datos
const getDatos = () =>
  superheroes.forEach((heroe) => {
    console.log(heroe.superhero);
    console.log(heroe.publisher);
  });

getDatos();

//Buscar heroes por published

const getHeroesPorPublished = (publisher = "") => {
  const heroesPublished = superheroes.filter((heroe) => {
    return heroe.publisher.toUpperCase().includes(publisher.toUpperCase());
  });
  if (heroesPublished.length > 0) {
    return heroesPublished;
  } else {
    return "El publisher no existe";
  }
};
console.log(getHeroesPorPublished());

//Busqueda por nombre de heroes

//Busqueda por indice
