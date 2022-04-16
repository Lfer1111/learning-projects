// mostrar todos los numeros impares que hay entre 2 numeros introducidos por el usuario

var num1 = parseInt(prompt("introduce un numero",0));
var num2 = parseInt(prompt("introduce otro numero",0));

document.write(`Tus numeros introducidos son ${num1} y ${num2} <hr>`);

if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
        if (i%2 != 0) {
            document.write(i + "<br>");
        } 
    }

} else if (num1 > num2) {
    for (let i = num2; i <= num1; i--) {
        if (i%2 != 0) {
            document.write(i + "<br>");
        } 
    }

} else {
    document.write("no manches, no pongas los mismos numeros");
}