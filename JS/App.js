//Funcion General para seleccionar y validar las opciones a ejecutar
function preEntrega1() {
  let memsaje =
    "Seleccione una opción:\n1.- Calcular costo total de productos y/o servicios seleccionados por el usuario.\n2.- Calcular pagos en cuotas sobre un monto determinado.\n3.- Calcular valor final de un producto seleccionado en función de impuestos y descuentos.\n4.- Calcular tiempo de espera promedio en relación con la cantidad de turnos registrados.\n5.-Calcular edad promedio de personas registradas.";
  let opcion = parseInt(prompt(memsaje));

  if (!isNaN(opcion)) {
    if (opcion > 0 && opcion <= 5) {
      if (opcion == 1) {
        ejecutarOpcion1();
      } else if (opcion == 2) {
        ejecutarOpcion2();
      } else if (opcion == 3) {
        ejecutarOpcion3();
      } else if (opcion == 4) {
        ejecutarOpcion4();
      } else {
        ejecutarOpcion5();
      }
    } else {
      alert("Ingrese un numero correcto entre el 1 y 5");
      preEntrega1();
    }
  } else {
    alert("El valor ingresado no es un numero, ingrese un numero correcto");
    preEntrega1();
  }
}

//Funcion para ejecutar la opcion 1
function ejecutarOpcion1() {
  let cantidad = parseInt(
    prompt("¿Cuanta cantidad de productos quieres calcular?")
  );
  if (!isNaN(cantidad)) {
    let costoTotal = 0;
    for (let i = 1; i <= cantidad; i++) {
      let costo = parseInt(prompt("Ingreso el costo del " + i + " producto"));
      costoTotal += costo;
    }
    alert("Costo total: " + costoTotal);
    preEntrega1();
  } else {
    alert("Ingrese un numero correcto");
    ejecutarOpcion1();
  }
}
//Funcion para ejecutar la opcion 2
function ejecutarOpcion2() {
  let monto = parseInt(prompt("Ingrese el monto a calcular"));

  if (!isNaN(monto)) {
    let cuota = parseInt(prompt("Ingrese las cuotas"));
    if (!isNaN(cuota)) {
      let calculo = monto / cuota;
      alert(
        "Los monto de " +
          monto +
          " con el calculo de " +
          cuota +
          " cuotas es : " +
          calculo
      );
      preEntrega1();
    }
  } else {
    alert("Ingrese un monto correcto");
    ejecutarOpcion2();
  }
}
//Funcion para ejecutar la opcion 3
function ejecutarOpcion3() {
  let precio = parseInt(prompt("Ingrese el monto del producto"));
  let precioFinal = 0;
  if (!isNaN(precio)) {
    let descPorcentaje = prompt(
      "Ingrese el porcentaje, no puede ser mayor al 50%"
    );
    if (!isNaN(descPorcentaje)) {
      if (descPorcentaje > 50) {
        alert("El descuento del procentaje no puede ser mayor a 50%");
        ejecutarOpcion3();
      } else {
        precioFinal = precio - (precio * descPorcentaje) / 100;
        alert(
          "Precio: " +
            precio +
            ", el descuento del " +
            descPorcentaje +
            "% es: " +
            (precio * descPorcentaje) / 100 +
            " , el precio total es: " +
            precioFinal
        );
        preEntrega1();
      }
    }
  } else {
    alert("Ingrese un monto correcto");
    ejecutarOpcion3();
  }
}
//Funcion para ejecutar la opcion 4
function ejecutarOpcion4() {
  let cantidad = parseInt(prompt("Ingrese la cantidad de personas por turno"));
  if (!isNaN(cantidad)) {
    let promedioTotal = 0;
    let turnoTotal = 0;
    for (let i = 1; i <= cantidad; i++) {
      let turno = parseInt(
        prompt("Ingresar el tiempo de espera del " + i + " turno")
      );
      turnoTotal += turno;
    }
    promedioTotal = turnoTotal / cantidad;
    alert("Tiempo de espera promedio: " + promedioTotal);
    preEntrega1();
  } else {
    alert("Ingrese un valor numero");
    ejecutarOpcion4();
  }
}
//Funcion para ejecutar la opcion 5
function ejecutarOpcion5() {
  let cantidad = parseInt(
    prompt("Ingrese la cantidad de personal a evaluar la edad promedio")
  );
  if (!isNaN(cantidad)) {
    let promedioTotal = 0;
    let personaEdadTotal = 0;
    for (let i = 1; i <= cantidad; i++) {
      let persona = parseInt(
        prompt("Ingresar la edad de la " + i + " persona")
      );
      personaEdadTotal += persona;
    }
    promedioTotal = personaEdadTotal / cantidad;
    alert("Edad promedio: " + promedioTotal);
    preEntrega1();
  } else {
    alert("Ingrese un valor numero");
    ejecutarOpcion5();
  }
}
//Llamando a la funcion inicial
preEntrega1();
