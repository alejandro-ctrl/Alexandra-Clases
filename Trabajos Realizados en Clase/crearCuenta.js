function crearCuenta(saldoDisponible) {
  let saldo = saldoDisponible;

  function depositar(cantidad) {
    if (cantidad > 0) {
      saldo += cantidad;
      console.log(`Se depositaron ${cantidad}. Saldo actual: ${saldo}`);
    } else {
      console.log("La cantidad a depositar debe ser mayor que 0.");
    }
  }

  function retirar(cantidad) {
    if (cantidad <= saldo) {
      saldo -= cantidad;
      console.log(`Se retiraron ${cantidad}. Saldo actual: ${saldo}`);
    } else {
      console.log(
        "La cantidad a retirar no puede ser mayor que el saldo disponible."
      );
    }
  }

  function verSaldo() {
    console.log("Saldo actual: " + saldo);
    return saldo;
  }
  return {
    depositar,
    retirar,
    verSaldo,
  };
}

const cuenta = crearCuenta(900);
//cuenta.depositar(100);
//cuenta.retirar(750);
//cuenta.retirar(800);
cuenta.verSaldo();
