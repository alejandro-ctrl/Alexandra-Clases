function Calculadora() {
    let resultado = 0;
    function Suma(num, num2) {
        var resultado = num + num2;
        console.log("El resultado de la suma de " + num +" y "+ num2+" es igual a"+ resultado);
    }
    return { Suma };
    
}
const miCalculadora = Calculadora();
miCalculadora.Suma(5, 2);