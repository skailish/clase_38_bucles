// ⚖️ Mayor o menor

// Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número.Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado.El programa debe terminar cuando se adivina el número.


// definimos numero random
const programa = Math.round(Math.random() * 9) + 1;

// pedimos al usuario que adivine
let usuario = Number(prompt("Adivine el número"));

while (programa != usuario) {

    if (programa > usuario) {
        usuario = Number(prompt("El número es mayor." + "\n" + "Vuelva a intentarlo"));
    } else if (programa < usuario) {
        usuario = Number(prompt("El número es menor." + "\n" + "Vuelva a intentarlo"));
    }
}

if (programa === usuario) {

    alert("Felicidades, adivinó")

}