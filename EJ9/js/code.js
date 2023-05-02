let message = prompt("Introduzca un texto para saber si tiene mayúsculas, minúsculas o una combinación de ambas");

function containsUppercase(message) {
	return /[A-Z]/.test(message);
}

function containsLowercase(message) {
	return /[a-z]/.test(message);
}

if (containsUppercase(message) && !containsLowercase(message)) {
	document.write("Sólo contiene mayúsculas");
} else if (!containsUppercase(message) && containsLowercase(message)) {
	document.write("Sólo contiene minúsculas");
} else {
	document.write("Contiene combinacinón de mayúsculas y minúsculas");
}
