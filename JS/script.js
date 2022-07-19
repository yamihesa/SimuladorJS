//Nombre y Apellido con Saludo de Bienvenida
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

    alert("Bienvenido a mi tienda \n" + nombre + " " + apellido);

/*-----------------------------------------------------------------------------------------------*/    

//Productos
let nombreProductoA = "Velas"
let precioProductoA = 150
let stockProductoA = 10

let nombreProductoB = "Sahumerios"
let precioProductoB = 200
let stockProductoB = 15

let nombreProductoC = "Hornitos"
let precioProductoC = 850
let stockProductoC = 10

let nombreProductoD = "Fuentes de agua"
let precioProductoD = 1500
let stockProductoD = 5

let nombreProductoE = "LLamadores de ángeles"
let precioProductoE = 380
let stockProductoE = 3

let cantidadCompras = parseInt(prompt("Ingrese la cantidad de productos a comprar:"))
let precioTotal = 0;

/*-----------------------------------------------------------------------------------------------*/

//Funciones
function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if(stock >= cantidad){
        calculoPrecio(cantidad, precio)
        alert("El precio total es de $" + (cantidad * precio))
    }
    else{
        alert("No tenemos en stock esa cantidad. Stock actual: " + stock + " unidades")
    }
    
}

function sumaSinIva(precio){
    return precio
}

function sumaIva(precio){
    return precio * 1.21
}

/*-----------------------------------------------------------------------------------------------*/

//ciclo y Condicionales
for(let i = 0; i < cantidadCompras; i++){

let compra1 = prompt("Ingrese el nombre del producto que desea comprar: \n♥ Velas\n♥ Sahumerios\n♥ Hornitos\n♥ Fuentes de agua\n♥ LLamadores de ángeles")
let cantidad1 = parseInt(prompt("Ingrese la cantidad del producto que desea comprar:"))

if(compra1 == "Velas"){
    calculoStock(cantidad1, stockProductoA, precioProductoA)
}
else if(compra1 == "Sahumerios"){
    calculoStock(cantidad1, stockProductoB, precioProductoB)
    }
    else if(compra1 == "Hornitos"){
        calculoStock(cantidad1, stockProductoC, precioProductoC)   
    }
    else if(compra1 == "Fuentes de agua"){
        calculoStock(cantidad1, stockProductoD, precioProductoD)
    }
    else if(compra1 == "LLamadores de ángeles"){
        calculoStock(cantidad1, stockProductoE, precioProductoE)   
    }
    else{
        alert("No tenemos ese producto")
    }
}

/*-----------------------------------------------------------------------------------------------*/

//Precio Final sin IVA
let precioTotalSinImpuestos = sumaSinIva(precioTotal)

alert("Precio total de tu compra sin impuestos $ " + precioTotalSinImpuestos)

/*-----------------------------------------------------------------------------------------------*/

//Precio Final con Iva
let precioTotalConImpuestos = sumaIva(precioTotal)

alert("Precio total de tu compra con impuestos $ " + precioTotalConImpuestos)

/*-----------------------------------------------------------------------------------------------*/

//comentario y Saludo de despedida
let comentario = prompt("¿Desea dejar un comentario?");

alert("Gracias por dejarnos tu comentario!!!")

alert("¡¡Hasta la proxima!!☺")