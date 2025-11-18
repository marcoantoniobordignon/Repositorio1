var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var btn_calcula = document.getElementById("calcular");
var resultado = document.getElementById("resultado");
function calcular(n1, n2) {
    return n1 + n2;
}
btn_calcula.addEventListener("click", function () {
    calcular(numero1.value, numero2.value);
});
