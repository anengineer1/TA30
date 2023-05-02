let num = prompt("Introduzca un número entero para obtener el factorial");
let resultado = 1;
for (var i = 1; i <= num; i++) {
    resultado = resultado * i;
}

document.writeln(resultado);
