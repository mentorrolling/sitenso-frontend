let datos = "pablo";
let num = 100;
let activo = true;

if (num > 100) {
  //acciones
  console.log("El número es mayor que 100");
} else if (num === 100) {
  console.log("El número es igual que 100");
} else {
  console.log("El número no es mayor que 100");
}

//Arreglos o Array
let alumnos = [
  "Ana Saldaño",
  "Franco Olmi",
  "José Maria Lanza",
  "Gabriel Vega",
  "Lucas Madrigal",
];

///obtengo un elemento
console.log(alumnos[4]);

console.log(alumnos.length);

//ultima posicion
alumnos[alumnos.length - 1];

//recorrer un arreglo
// for (let i = 0; i < alumnos.length; i++) {
//   //accion
//   console.log(alumnos[i]);
// }

for (const alumno of alumnos) {
  console.log(alumno);
}

// alumnos.forEach(function (alumno) {
//   console.log(alumno);
// });

//Añadir elementos al arreglo
alumnos.push("Pablo Marino", "Fabrizio Tonin", "Emilse Arias");
alumnos.unshift("Walter Frias");

//Eliminar elementos
alumnos.pop(); //el ultimo
alumnos.shift(); //el primero

//Elimnar una posicion
// alumnos.splice(5, 1);

//Como obtengo el indice o posicion
// const indice = alumnos.indexOf("Gabriel Vega");

// alumnos.splice(indice, 1);

alumnos.sort();
// alumnos.push("Alberto Gonzalez");
alumnos.reverse();

let numeros = [2, 35, 4, 25, 87, 1, 42, 16];

numeros.sort((a, b) => a - b); //ordenar numeros

//Callback---------------------------------------

const resultado = numeros.find(function (numero) {
  return numero % 2 === 0;
});

const pares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});

const newAlumnos = alumnos.filter(function (alumno) {
  return alumno.toUpperCase().includes("JOS");
});

let texto = "Hola mundo";

//Tarea
//Dado un arreglo de números obtener en un nuevo arreglo los que sean pares y ordenarlos de menor a mayor
let numeritos = [78, 98, 44, 102, 569, 412, 1025, 69, 35, 785, 222];

let numerosPares = numeritos.filter((numero) => {
  return numero % 2 === 0;
});

console.log(numerosPares.sort((a, b) => a - b));
