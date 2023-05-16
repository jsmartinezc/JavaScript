let day = prompt("Ingrese dia").toLowerCase();

if (day == "sabado" || day == "domingo") {
  alert("Fin de semana");
} else {
  if (
    day == "lunes" ||
    day == "martes" ||
    day == "miercoles" ||
    day == "jueves" ||
    day == "viernes"
  ) {
    alert("Es un dia entre semana");
  } else {
    alert("Ingresar un dia de la semana");
  }
}
