function ajax_get_json(url){
    var xmlhttp = new XMLHttpRequest();
    var datos;

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState === 4 &&
            xmlhttp.status === 200){
                datos = JSON.parse(xmlhttp.responseText);
            }
    }

    xmlhttp.open("POST", url, true);
    xmlhttp.send();

    return datos;
}

function restartOpacity(){
    luzRoja.style.opacity(0.3);
    luzAmarillo.style.opacity(0.3);
    luzVerde.style.opacity(0.3);
    luzAzul.style.opacity(0.3);
}

function clickOn(){
    onOff.style.backgroundColor("green");
    onOff.value("ON");

    var luces = ajax_get_json("./luces.html");

    for( var color in luces){
        if(luces[color] == 1){
            document.getElementById(color).opacity(1);
        }
    }

    if(color == "botonRojo"){
        alert("El robot esta desconectado.");
        onOff.style.backgroundColor("green");
        onOff.value("ON");
    }
    else{
        if(color == "botonAzul"){
            alert("Almacén de MilkTxoko vacío.");
        }
    }
}

function startControlador(){
    var arrayOnzas = [document.getElementById("contOnzas1"),
                    document.getElementById("contOnzas2"),
                    document.getElementById("contOnzas3"),
                    document.getElementById("contOnzas4"),
                    document.getElementById("contOnzas5"),
                    document.getElementById("contOnzas6"),
                    document.getElementById("contOnzas7"),
                    document.getElementById("contOnzas8"),
                    document.getElementById("contOnzas9"),
                    document.getElementById("contOnzas10"),
                    document.getElementById("contOnzas11"),
                    document.getElementById("contOnzas12"),
                    document.getElementById("contOnzas13"),
                    document.getElementById("contOnzas14"),
                    document.getElementById("contOnzas15"),
                    document.getElementById("contOnzas16"),
                    document.getElementById("contOnzas17"),
                    document.getElementById("contOnzas18"),
                    document.getElementById("contOnzas19"),
                    document.getElementById("contOnzas20"),
                    document.getElementById("contOnzas21"),
                    document.getElementById("contOnzas22"),
                    document.getElementById("contOnzas23"),
                    document.getElementById("contOnzas24"),
                    document.getElementById("contOnzas25")
                    ];
    
    arrayOnzas.forEach(elemento => elemento.src="./img/vacio.jpg");
    
    restartOpacity();

    var onOff = document.getElementById("onOff");
    onOff.value("Off");
    onOff.style.backgroundColor("red");
    onOff.addEventListener("click", clickOn);

    document.getElementById("patron1").style.backgroundColor("grey");
    document.getElementById("patron2").style.backgroundColor("grey");
}

function setUpControlador(){
    // Hacemos que aparezca el div
    document.getElementById("controlador").style.display("block");

    startControlador();

}
