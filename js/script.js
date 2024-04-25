function agregarTarea(){

    //Obtenemos el valor del input
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    //Validamos que le valor no sea vacio
    if(nuevaTareaTexto === ""){
        alert("Por favor, ingrese una tarea");
        return;
    }

    //Crear elemento en la lista
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + "";

    //Crear boton de Eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () {
        nuevaTarea.remove();
    }

    //Agregar boton eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //Agregar elemento a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    //Limpiar el cuadro de texto
    document.getElementById("nuevaTarea").value = "";

}