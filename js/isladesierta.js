// Isla desierta

// Crear un programa que permita mover un barco hacia una isla.El programa debe permitir ingresar los valores AVANZAR o RETROCEDER, siendo que AVANZAR acerca el barco un espacio hacia la isla y RETROCEDER lo aleja.El programa debe terminar cuando el barco llega a la isla.Ejemplo:
// ⛵️🌊🌊🌊🏝
// // AVANZAR
// 🌊⛵️🌊🌊🏝
// // AVANZAR
// 🌊🌊⛵️🌊🏝
// // RETROCEDER
// 🌊⛵️🌊🌊🏝
// // AVANZAR
// 🌊🌊⛵️🌊🏝
// // AVANZAR
// 🌊🌊🌊⛵️🏝
// ¡Has llegado a la isla!

// // defino variables constantes de elemento para comparación
// const barco = "⛵️";
// const isla = "🏝";


// defino array dinámico
let viaje = ['⛵️', '🌊', '🌊', '🌊', '🏝'];

// defino variables dinámicas para cambios en array
let movimiento = "";
let barco = "";


// si la isla no es próxima al barco
while ((viaje.indexOf("⛵️") + 1) != viaje.indexOf("🏝")) {
    movimiento = prompt("Elija si avanzar o retroceder " + viaje);
    if (movimiento === "avanzar") {
        // defino el lugar donde estará el barco
        barco = viaje.indexOf("⛵️") + 1;
        // asigno barco a su nuevo index
        viaje[barco] = "⛵️";
        // asigno ola dodne antes estaba el barco   
        viaje[barco - 1] = "🌊";
    } else if (movimiento === "retroceder") {
        if (viaje.indexOf("⛵️") > 0) {
            barco = viaje.indexOf("⛵️") - 1;
            viaje[barco] = "⛵️";
            viaje[barco + 1] = "🌊";
        }
    }

}

alert("Llegó a la isla! " + viaje);