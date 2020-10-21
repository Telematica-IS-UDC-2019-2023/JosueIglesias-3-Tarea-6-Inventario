var btnAgregarProd = document.querySelector("#btnAgregarProd")
var btnBorrarProd = document.querySelector("#btnBorrarProd")
var btnBuscarProd = document.querySelector("#btnBuscarProd")
var btnListarProds = document.querySelector("#btnListarProds")
var btnListarProdsInv = document.querySelector("#btnListarProdsInv")
var btnAgregarPosicion = document.querySelector("#btnAgregarPosicion")

var nombreProducto = document.querySelector("#nombreProducto")
var codigoProducto = document.querySelector("#codigoProducto")
var descripcionProducto = document.querySelector("#descripcionProducto")
var cantidadProducto = document.querySelector("#cantidadProducto")
var costoProducto = document.querySelector("#costoProducto")
var listaProductos = document.querySelector("#listaProductos")
var agregarPosicion = document.querySelector("#agregarPosicion")

var resNombreProd = document.querySelector("#resNombreProd")
var resCodigoProd = document.querySelector("#resCodigoProd")
var resDescripcionProd = document.querySelector("#resDescripcionProd")
var resCantidadProd = document.querySelector("#resCantidadProd")
var resCostoProd = document.querySelector("#resCostoProd")
var resListaProd = document.querySelector("#resListaProd")
var resValorMercancia = document.querySelector("#resValorMercancia")

var vecNombreProductos = new Array 
var vecCodigoProductos = new Array 
var vecDescripcionProductos = new Array 
var vecCantidadProductos = new Array 
var vecCostoProductos = new Array 
var vecProductos = new Array

var sumMerc = 0


class Producto{
    constructor(nombre, codigo, descripcion, cantidad, costo){
        this.nombre = nombre
        this.codigo = codigo
        this.descripcion = descripcion
        this.cantidad = cantidad 
        this.costo = costo
    }
    
    agregarProducto(producto){
        vecProductos.push(producto)
    }

    agregarProductoPosicion(posicion, producto){

        if (posicion < 20 && posicion <= vecProductos.length){
            vecProductos.splice(posicion - 1,0,producto)
        } else {
            alert('No hay espacio disponible')
        }
       
    }

    borrarProducto(cod){
        let i = 0
        while ((cod != vecProductos[i].codigo) && (i < vecProductos.length)){
            i++
        }
        if (cod === vecProductos[i].codigo){
            sumMerc -= (vecProductos[i].costo * vecProductos[i].cantidad)
            resValorMercancia.innerHTML = '$' + sumMerc
            vecProductos.splice(i,1)
        }
        else {
            alert('Ingrese un producto valido')
        }
        
    }

    buscarProducto(cod){
        let i = 0
        while (cod != vecProductos[i].codigo && i < vecProductos.length){
            i++
        }
        if (cod === vecProductos[i].codigo){
            console.log(vecProductos[i])
            resNombreProd.innerHTML = 'Nombre: '+ vecProductos[i].nombre
            resCodigoProd.innerHTML = 'Codigo: '+ vecProductos[i].codigo
            resDescripcionProd.innerHTML = 'Descripción: '+ vecProductos[i].descripcion
            resCantidadProd.innerHTML = 'Cantidad: '+ vecProductos[i].cantidad
            resCostoProd.innerHTML = 'Costo: '+ vecProductos[i].costo
        }
        else {
            alert('Ingrese un producto valido')
        }
    }


}


btnAgregarProd.addEventListener('click', () => {
    let producto  = new Producto(nombreProducto.value, codigoProducto.value, descripcionProducto.value, Number(cantidadProducto.value), Number(costoProducto.value))
    producto.agregarProducto(producto)
    sumMerc += producto.costo * producto.cantidad
    resValorMercancia.innerHTML = '$' + sumMerc
    console.log(vecProductos)
})

btnBorrarProd.addEventListener('click', () => {
    let producto = new Producto
    producto.borrarProducto(codigoProducto.value)
    console.log(vecProductos)
    

})

btnBuscarProd.addEventListener('click', () => {
    let producto = new Producto
    producto.buscarProducto(codigoProducto.value)
})

btnListarProds.addEventListener('click', () => {
    listaProductos.innerHTML=""
    resListaProd.innerHTML = 'Productos: ' 
    for (let i = 0; i < vecProductos.length; i++){
        let nuevo = document.createElement('li')
        nuevo.textContent = vecProductos[i].nombre + ' x ' + vecProductos[i].cantidad
        listaProductos.appendChild(nuevo)
    }
})

btnListarProdsInv.addEventListener('click', () => {
    listaProductos.innerHTML=""
    resListaProd.innerHTML = 'Productos: '
    for (let i = vecProductos.length - 1; i >= 0; i--){
        let nuevo = document.createElement('li')
        nuevo.textContent = vecProductos[i].nombre + ' x ' + vecProductos[i].cantidad
        listaProductos.appendChild(nuevo)
    }
})

btnAgregarPosicion.addEventListener('click', () => {
    let producto = new Producto(nombreProducto.value, codigoProducto.value, descripcionProducto.value, Number(cantidadProducto.value), Number(costoProducto.value))
    producto.agregarProductoPosicion(Number(agregarPosicion.value),producto)
    console.log(vecProductos)
})