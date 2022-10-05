const botonSwal = document.getElementById("btnMostrarSwal")
botonSwal.onclick = mostrarSwal

function mostrarSwal() {
    Swal.fire({
        icon: "success",
        title: "Su Pedido fue realizado con Exito!"
    })
}