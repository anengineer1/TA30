let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

let dni = prompt("Introduzca DNI");
let letra = prompt("La letra");

if ( !(99999999 >= dni >= 0)) {
    document.write("No calculable")
} else {
    let letra_calculada = calculateLetra(dni, letras);
    document.write("El DNI con letra es " + dni + letra_calculada +"; ");
    if (letra == letra_calculada) {
	document.write("la letra introducida es correcta");
    } else {
	document.write("la letra introducida es incorrecta");
    }
}

function calculateLetra(dni, letras) {
    return letras[dni % 23]
}
