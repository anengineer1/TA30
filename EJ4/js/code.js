let valores = [true, 5, false, "hola", "adios", 2];

function higherString(valores) {
    if (valores[3] > valores[4]) {
	return valores[3];
    } else {
	return valores[4];
    }
}

function getBooleans(bool, valores) {
    if (bool) {
	return valores[0];
    } else {
	return valores[2];
    }
}

// Sub excercise 1
console.log(higherString(valores));

// Sub excercise 2
console.log(getBooleans(true, valores));

// Sub excercise 2
console.log(getBooleans(false, valores));

// Sub excercise 3
console.log("Suma " + (valores[1] + valores[5]));

console.log("Resta " + (valores[1] - valores[5]));


console.log("Multiplicación " + (valores[1] * valores[5]));

console.log("División " + (valores[1] / valores[5]));

console.log("Mod " + (valores[1] % valores[5]));
