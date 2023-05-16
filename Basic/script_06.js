// Control of uppercases and lowercases
// Spaces in blank

let age = parseInt(prompt("Ingrese su edad"));
let country = prompt("Ingrese su pais").toLowerCase();

console.log(age, country);

if (age == 0 || country == "") {
  alert("No ingresaste uno de los valores");
} else {
  if (age >= 18 && country != "china") {
    alert("Se ha desbloquado el catalogo de pelis violentas");
  } else {
    alert("No tienes permisos para ver este catalogo");
  }
}

/**
 * > Indicates when something is greater than
 * < Indicates when something is less than
 * == Comparates if the value is the same
 * >= Greater or equal
 * <= Less or equal
 * != Different
 *
 * Logical operators
 * &&: Y
 * ||: O
 */
