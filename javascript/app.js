class Usuario {
  constructor(nombre, apellido, edad, domicilio, password) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.edad = edad),
      (this.domicilio = domicilio),
      (this.password = password);
  }
  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido} `);
  }
}

const usuario1 = new Usuario(
  "Pablo",
  "Marino",
  38,
  { calle: "Av Jaldo 802", localidad: "Tafí Viejo" },
  "mimamamemima"
);

const usuario2 = new Usuario("Franco", "Vega", 25, "Thames 1.029", "soyuncapo");

/*
Cuenta bancaria
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este metodo para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

*/

class Cuenta {
  constructor(titular, saldo = 0) {
    (this.titular = titular), (this.saldo = saldo);
  }

  ingresar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      this.informar();
    } else {
      console.warn("El valor debe ser mayor que 0");
    }
  }

  extraer(valor) {
    this.saldo -= valor;
    this.informar();
  }

  informar() {
    console.log("=======Detalle de cuenta=======");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
    console.log("===============================");
  }
}

const cuenta1 = new Cuenta("Alex");
