let mostrarBoton = true
let boton = document.getElementById("ver-mas-boton")
let caja = document.getElementById("box")
let botonToggle = document.getElementById("toggleBtn")
let botonAleatorio = document.getElementById("randomBtn")
let botonAgregarNombre = document.getElementById("addBtn")
let mostrarContenido = document.getElementById("texto-informatica")
let botonAgregar = document.getElementById("addItemBtn")
let lista = document.getElementById("itemsList")
let listaTarea = document.getElementById("taskList")
let listaNombre = document.getElementById("nameList")
let textoIntroducido = document.getElementById("newItemInput")
let textoTareaIntroducida = document.getElementById("newTaskInput")
let textoNombreIntroducido = document.getElementById("inputName")
let botonAgregarTarea = document.getElementById("addTaskBtn")
let frasesFrikisInformaticas = ["jaja","no","tiene","gracia"]
let colores = [
"#ff0000", 
"#00ff00", 
"#0000ff", 
"#ff00ff", 
"#00ffff", 
"#ff8000", 
"#8000ff", 
"#00ff80", 
"#ff0080", 
"#80ff00", 
"#0080ff", 
"#ffbf00", 
"#bf00ff", 
"#00ffbf", 
"#bf00ff", 
"#00bfff", 
"#ff00bf", 
"#80ff80", 
"#ff80ff", 
"#80ffff" 
]

function obtenerFrase(){
    return frasesFrikisInformaticas[Math.floor(Math.random()*frasesFrikisInformaticas.length)]
}

function cambiarColor(){
    boton.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)]
    mostrarContenido.style.color = colores[Math.floor(Math.random()*colores.length)]
}

boton.addEventListener('click',function(){
    mostrarContenido.innerHTML = obtenerFrase()
    cambiarColor()
})

botonAgregar.addEventListener('click',function(){
    let nuevaInsercion = document.createElement("li")
    nuevaInsercion.innerHTML = textoIntroducido.value
    let imagenCheked = document.createElement("img")
    let imagenDelete = document.createElement("img")

    imagenDelete.setAttribute('src',"basura.png")
    imagenDelete.setAttribute('width',"30")
    imagenDelete.setAttribute('onclick',"eliminar(this)")

    imagenCheked.setAttribute('src',"noVerificado.png")
    imagenCheked.setAttribute('width',"30")
    imagenCheked.setAttribute('onclick',"ponerChecked(this)")

    lista.appendChild(nuevaInsercion)
    nuevaInsercion.appendChild(imagenCheked)
    nuevaInsercion.appendChild(imagenDelete)
})

botonAgregarNombre.addEventListener('click',function(){
    let nuevaInsercion = document.createElement("li")
    nuevaInsercion.innerHTML = textoNombreIntroducido.value

    listaNombre.appendChild(nuevaInsercion)  
})

botonAleatorio.addEventListener('click',function(){
    numeroSeleccionado = nombreAleatorio()
    nombre = listaNombre.children[numeroSeleccionado].textContent
    listaNombre.children[numeroSeleccionado].style.backgroundColor = "yellow"
    listaNombre.children[numeroSeleccionado].innerHTML = " - Se ha elegido : " +nombre
})

botonAgregarTarea.addEventListener('click',function(){
    let nuevaInsercion = document.createElement("li")
    nuevaInsercion.innerHTML = textoTareaIntroducida.value
    let imagenEliminar = document.createElement("img")

    imagenEliminar.setAttribute('src',"eliminar.png")
    imagenEliminar.setAttribute('width',"30")
    imagenEliminar.setAttribute('onclick',"eliminarTarea(this)")

    listaTarea.appendChild(nuevaInsercion)
    nuevaInsercion.appendChild(imagenEliminar)

})

botonToggle.addEventListener('click',function(){
    toggleBox()
})

function ponerChecked(imagen){
    nodoPadre = imagen.parentElement
    nodoPadre.style.color = "green"
    imagen.setAttribute('src','verificado.png')
}

function eliminar(imagen){
    nodoPadre = imagen.parentElement
    nodoPadre.remove()
}

function eliminarTarea(imagen){
    nodoPadre = imagen.parentElement
    nodoPadre.remove()
}

function nombreAleatorio(){
    return Math.floor(Math.random()* listaNombre.children.length)
}

function toggleBox(){
    if (mostrarBoton) {
        caja.style.display = "block"
        mostrarBoton = false
    }else {
        caja.style.display = "none"
        mostrarBoton = true
    }
}