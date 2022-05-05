let myModal = new bootstrap.Modal(document.querySelector("#mymodal"));

let textNum = document.querySelector("#opcion");
let numeroMagico = 0;

const play = () => {
  numeroMagico = Math.ceil(Math.random() * 100);
  console.log(numeroMagico);
  myModal.show();
};

const adivinar = (num) => {
  if (num) {
    let numerito = parseInt(num);

    if (numerito > 0 && numerito <= 100) {
      switch (true) {
        case numerito > numeroMagico:
          alert("el numero es mayor que el número mágico");
          break;
        case numerito < numeroMagico:
          alert("el numero es menor que el número mágico");
          break;

        default:
          alert("✨GANASTE✨");
          break;
      }
      myModal.hide();
    } else {
      alert("El rango de números es de 1 a 100");
    }
  } else {
    alert("Debe ingresar un número válido");
  }
};

document.querySelector("#btnAdivinar").addEventListener("click", () => {
  adivinar(textNum.value);
  textNum.value = "";
});
