let message = prompt("Introduzca un texto para saber si tiene mayúsculas, minúsculas o una combinación de ambas");

function reverseString(message) {

    // return a new array of strings
    const arrayStrings = message.split("");
   
    // reverse the new created array elements
    const reverseArray = arrayStrings.reverse();
 
    // join all elements of the array into a string
    const joinArray = reverseArray.join("");
    
    // return the reversed string
    return joinArray;
}
 

function isPalindrome(message) {
    let message_no_space = message.replace(/ /g, '');
    let message_lower = message_no_space.toLowerCase();
    if (message_lower == reverseString(message_lower)) {
	return "Se trata de un palíndromo";
    } else {
	return "No es palíndromo";
    }
}

document.writeln(isPalindrome(message));
