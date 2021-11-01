//Objetos

// caracteristicas
// funcionalidades

let persona = {
  nombre: "Fabrizio",
  apellido: "Tonin",
  edad: 35,
  domicilio: {
    calle: "Thames",
    localidad: "San Miguel de Tucumán",
    provincia: "Tucumán",
  },
  //   saludar() {
  //     console.log("Hola como están?");
  //   },
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.nombre + " " + persona.apellido);

//desestructuración de objetos
const {
  nombre,
  apellido,
  domicilio: { calle, localidad, provincia },
} = persona;
console.log(nombre + " " + apellido);
// const { calle, localidad, provincia } = domicilio;
console.log(calle);

console.log(`Hola, soy ${nombre} ${apellido}`);

//recorrer un objeto
for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]} `);
}

persona.apellido = "Gonzalez";
persona.trabajo = "Profesor";

delete persona.edad;
