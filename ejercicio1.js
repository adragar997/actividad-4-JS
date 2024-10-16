let boton = document.getElementById("ver-mas-boton")
let mostrarContenido = document.getElementById("texto-informatica")
let botonAgregar = document.getElementById("addItemBtn")
let lista = document.getElementById("itemsList")
let textoIntroducido = document.getElementById("newItemInput")
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

function ponerChecked(imagen){
    nodoPadre = imagen.parentElement
    nodoPadre.style.color = "green"
    imagen.setAttribute('src','verificado.png')
}

function eliminar(imagen){
    nodoPadre = imagen.parentElement
    nodoPadre.remove()
}