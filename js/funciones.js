function calcularTotal() {
    var tabla = document.getElementById('tablaPrecios');
    var filas = tabla.getElementsByTagName('tr');
    var total = 0;
    for (var i = 1; i < filas.length; i++) {
      var celdaPrecio = filas[i].getElementsByClassName('precio')[0]; 
      var precio = parseFloat(celdaPrecio.textContent);
      total += precio;
    }
    alert('El total de precios es: ' + total);
  }
function mostrarMensaje() {
    var nombre = document.getElementById('nombre').value;
    alert('Hola, ' + nombre + '! muchas gracias por contactar con nosotros');
}
  