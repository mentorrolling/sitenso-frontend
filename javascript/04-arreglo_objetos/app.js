import superheroes from "./superheroes.js";

// console.log(superheroes);

//recorrer el arreglo
superheroes.forEach((heroe) => {
  //acciones
  console.log("Nombre: " + heroe.superhero);
  console.log("Alter ego: " + heroe.alter_ego);
  console.log("Published :" + heroe.publisher);
  console.log("====================");
});

//Mostremos los heroes de Marvel
const marvel = superheroes.filter(function (heroe) {
  //   return heroe.publisher === "Marvel";
  return heroe.publisher.includes("Marv");
});

console.log(marvel);
