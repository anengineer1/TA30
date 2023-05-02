let num = prompt("Un entero para saber si es par o inpar");

function parOInpar(num) {
    if ((num % 2) == 0) {
	return "El número introducido es par";
    } else {
	return "El número introducido es inpar";
    }
}

document.write(parOInpar(num));
