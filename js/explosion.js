// Explosión

// Crear un programa que permita ingresar una serie de números separados por espacio.El programa debe disminuyendo cada número en 1 por ronda e ir mostrando el resultado(en consola, o en un string concatenado) hasta que todos lleguen a 0(cuando lleguen a no deben seguir disminuyendo) y se produzca la explosión.Ejemplo
// ⏱ 3 1 0 2
// ⏱ 2 0 0 1
// ⏱ 1 0 0 0
// 💥💥💥💥💥


// defino array
let secuencia = prompt("Ingrese una serie de números separadas por espacio");

// separo elementos
secuencia = secuencia.split(" ");

// defino el mensaje antes y luego de explosión
let mensaje = "";
let explosion = [""];
let explosionIndex = -1;

// defino el valor inicial de i, fuera del bucle
let i = 0;

while (explosion.length != secuencia.length) {
    for (i; i < secuencia.length; i++) {
        if (secuencia[i] > 0) {
            secuencia[i] = Number(secuencia[i]);
            secuencia[i] -= 1;
            if (secuencia[i] === 0) {
                explosion[explosionIndex + 1] = "💥";
                explosionIndex++;
            }
        }
    };
    i = 0;
    mensaje = `⏱  ${secuencia}`
    alert(mensaje);
}

alert(explosion);