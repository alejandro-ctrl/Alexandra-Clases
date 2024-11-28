function crearConteo(num) {
    let conteo = num;
    function conteoI() {
        conteo += 2;
        console.log("Este es un contador" + conteo);
        return conteo;
    }
    return conteoI;
    
}
const ejemplo = crearConteo(5);
ejemplo();
//const ejemplo = crearConteo()//
