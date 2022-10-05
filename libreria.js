const botonSwal = document.getElementById("btnMostrarSwal")
botonSwal.onclick = mostrarSwal

function mostrarSwal() {
    Swal.fire({
        icon: "success"
    })
}