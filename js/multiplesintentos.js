// 🔐 Múltiples intentos

// Crear un programa que pida ingresar usuario y contraseña.El programa debe permitir hasta 3 intentos, cuando el usuario y / o la contraseña sean incorrectos.Si se ingresa correctamente ambos antes de 3 intentos erróneos, debe mostrar un mensaje de bienvenida.Si se ingresan 3 intentos erróneos, debe mostrar un mensaje de error y terminar el programa.El usuario y la contraseña ya deben estar guardadas en variables.

// creamos usuario y contraseña
const usuario = "ada";
const password = "1234";

let numero = 0;

let usuarioIngresado = prompt("Ingrese su usuario");
let passwordIngresado = prompt("Ingrese su contraseña");

if (passwordIngresado === password && usuarioIngresado === usuario) {
    alert("Bienvenido");
} else {
    while (numero < 2) {

        usuarioIngresado = prompt("Vuelva a ingresar su usuario");
        passwordIngresado = prompt("Vuelva a ingresar su contraseña");

        numero++;

        if (passwordIngresado === password && usuarioIngresado === usuario) {
            numero = 3;
            alert("Bienvenido");
        }
    }
}

if (passwordIngresado != password || usuarioIngresado != usuario) {
    alert("Error")
}