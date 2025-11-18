let numero1 = document.getElementById("numero1")! as HTMLInputElement;
let numero2 = document.getElementById("numero2")! as HTMLInputElement;
let btn_calcula = document.getElementById("calcular")! as HTMLButtonElement;
let resultado = document.getElementById("resultado")! as HTMLDivElement;

function calcular(n1: number, n2: number) {
  return n1 + n2;
}

btn_calcula.addEventListener("click", () => {
  resultado.innerHTML = calcular(
    parseFloat(numero1.value),
    parseFloat(numero2.value)
  ).toString();
});
