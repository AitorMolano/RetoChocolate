function mostrar() {
    document.getElementById("menu-vertical").style.width = "30%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "none";
    document.getElementById("cerrar").style.display = "inline";
}


function ocultar() {
    document.getElementById("menu-vertical").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "inline";
    document.getElementById("cerrar").style.display = "none";
}

