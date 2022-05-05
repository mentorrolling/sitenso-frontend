class Usuario {
  constructor(nombre, apellido, edad, {}, password) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.edad = edad),
      (this.domicilio = {}),
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
    if (valor > 0 && valor < this.saldo) {
      this.saldo -= valor;
      this.informar();
    } else {
      console.warn(
        "El valor ingresado no es correcto. El valor a extraer debe ser menor o igual al saldo"
      );
    }
  }

  informar() {
    console.log("=======Detalle de cuenta=======");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
    console.log("===============================");
  }
}

const cuenta1 = new Cuenta("Alex");

class Administrador extends Usuario {
  constructor(nombre, apellido, edad, domicilio, password, puesto) {
    super(nombre, apellido, edad, domicilio, password);
    this.puesto = puesto;
  }
  presentacion() {
    console.log("===================");
    console.log(`Nombre: ${this.nombre} ${this.apellido}`);
    console.log(`Puesto: ${this.puesto}`);
    console.log("===================");
  }
}

const admin1=new Administrador('José','Gonzalez',50,{calle:'Av. Siria 122',localidad:'S M Tucumán'},'abc123','Gerente regional')