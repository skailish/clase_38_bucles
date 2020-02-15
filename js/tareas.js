// Lista de tareas

// Crear un programa que tenga un menú con las siguientes opciones:
// AGREGAR TAREA: debe pedir al usuario ingresar una tarea y agregarla a la lista de tareas
// MODIFICAR TAREA: debe pedir al usuario ingresar el número de tarea que se desea modificar, mostrarla, y pedir que ingrese la tarea a reemplazarla o modificarla
// ELIMINAR TAREA: debe pedir al usuario ingresar el número de tarea a eliminar, mostrarla, y pedirle confirmar si desea eliminarla o no
// VER TAREAS: debe listar todas las tareas hasta el momento
// SALIR: debe terminar la ejecución del programa
// El programa debe mostrar el menú de opciones, y permitir ingresar una opción.Si la opción ingresada es incorrecta, debe mostrar nuevamente el menú.Si se elige SALIR, debe terminar el programa.Si se elige alguna de las otras opciones, debe realizar las acciones correspondientes, y una vez terminada, volver al menú de opciones.

// defino variables dinámicas
let tareas = [];
let tareaUsuario = "";
let eliminar = false;
let usuarioElige = "";

// defino mensaje de opciones
const opciones = `Elija una opción:
1- Agregar una tarea
2- Modificar una tarea
3- Eliminar una tarea
4- Ver tareas
5- Salir`;



// defino variable dinámica de la lista de tareas;
let listaTareas = "";
let i = 0;

// pregunto al usuario que opción elige
while (usuarioElige != "5") { // mientras no elija salir
    i = 0
    listaTareas = "";

    for (i; i < tareas.length; i++) {
        listaTareas += `\n${i + 1}) ${tareas[i]}`
    }

    if (tareas.length < 1) {
        usuarioElige = prompt(`Aún no hay tareas\n${opciones}`);
    } else {
        usuarioElige = prompt(`${opciones}`);

    }

    switch (usuarioElige) {
        case "1": /// intento ponerle número a las tareas, pero cuando se elimina 1 se
            tareas.push(prompt("Ingrese la tarea que desea agregar") + "\n");
            break
        case "2":
            tareaUsuario = Number(prompt(`Ingrese el número de tarea que desea modificar:\n ${listaTareas}`));
            if (tareaUsuario > tareas.length) {
                alert("Esa tarea no existe.\n" + opciones);
            } else {
                alert(`Elegiste modificar la tarea ${tareaUsuario}: ${tareas[tareaUsuario - 1]}`);
                tareas[tareaUsuario - 1] = prompt("Ingrese la tarea modificada") + "\n";
            }
            break
        case "3":
            tareaUsuario = Number(prompt(`Ingrese el número de tarea que desea eliminar:\n ${listaTareas}`));
            if (tareaUsuario > tareas.length) {
                alert("Esa tarea no existe.\n" + opciones);
            } else {
                eliminar = confirm(`Elegiste eliminar la tarea ${tareaUsuario}: ${tareas[tareaUsuario - 1]}
                Confirma eliminar?`);
                if (eliminar === true) {
                    tareas.splice((tareaUsuario - 1), 1);
                } else {
                    alert("Acción cancelada");
                }
            }
            break
        case "4":
            alert(`Lista de tareas:\n${listaTareas}`);
            break

        case "5":
            break

        default:
            alert("La opción ingresada no es correcta.\n" + opciones);

    }

}

alert("Adios");