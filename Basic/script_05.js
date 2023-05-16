// Conditionals if/else
// Algoritm that depending on the user age enables the website for the user
// If the country is China even if the user is over 18, do not enable the website

let age = prompt("Ingrese su edad");
let country = prompt("Ingrese su pais");

if (age >= 18 && country != "china") {
  alert("Se ha desbloquado el catalogo de pelis violentas");
} else {
  alert("No tienes permisos para ver este catalogo");
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
