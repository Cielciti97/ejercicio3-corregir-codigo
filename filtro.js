
//console.log de prueba para confirmar conexión entre archivos
console.log("Conexión con filtro.js :)");



const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

/* 
//document.getElementsByName("lista-de-productos") parce que puede funcionar para seleccionar el elemento li. Sin embargo, getElementsByName devuelve una colección de nodos, no un solo nodo.

Para el caso de ByName “lista-de-productos”, puedes seleccionarlo utilizando document.getElementsByName("lista-de-productos") y [0] seguido para obtener el primer elemento de la colección. */


const li = document.getElementsByName("lista-de-productos")[0];

const $i = document.querySelector('.input');
//Se devbe utilizar document.querySelector('button'), para agregar correctamente un evento de clic de boton
const botonDeFiltro = document.querySelector('button');

for (let i = 0; i < productos.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  var imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}

//La función displayProductos(productos) NO la vi definida en ningun momento, sólo esta siendo invocada, en su lugar, con base a las sesiones pasadas es mejor usar el evento onclik, para mostar la colección de datos a filtrar. Procedo a comentar las siguientes líneas y declarar en la línea: 19 mi const botonDeFiltro

/* // displayProductos(productos)
const botonDeFiltro = document.querySelector("button"); */

botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  const texto = $i.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

//Esta función me parece ok
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}


//Parece que ya quedó