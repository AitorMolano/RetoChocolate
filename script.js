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

function clickOn(){
    onOff.style.backgroundColor("green");
    onOff.value("ON");

    var luces = ajax_get_json("./luces.html");

    for( var color in luces){
        if(luces[color] == 1){
            document.getElementById(color).opacity(1);
        }
    }

    
}

function startControlador(){
    var luzRoja = document.getElementById("botonRojo");
    var luzAmarillo = document.getElementById("botonAmarillo");
    var luzVerde = document.getElementById("botonVerde");
    var luzAzul = document.getElementById("botonAzul");

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
    
    luzRoja.style.opacity(0.3);
    luzAmarillo.style.opacity(0.3);
    luzVerde.style.opacity(0.3);
    luzAzul.style.opacity(0.3);

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






    //___________________________________________________
    
    var ArrayOnzas = [document.getElementById("boton1"),
                    document.getElementById("boton2"),
                    document.getElementById("boton3"),
                    document.getElementById("boton4"),
                    document.getElementById("boton5"),
                    document.getElementById("boton6"),
                    document.getElementById("boton7"),
                    document.getElementById("boton8"),
                    document.getElementById("cboton9"),
                    document.getElementById("boton10"),
                    document.getElementById("boton11"),
                    document.getElementById("boton12"),
                    document.getElementById("boton13"),
                    document.getElementById("boton14"),
                    document.getElementById("boton15"),
                    document.getElementById("boton16"),
                    document.getElementById("boton17"),
                    document.getElementById("boton18"),
                    document.getElementById("boton19"),
                    document.getElementById("boton20"),
                    document.getElementById("boton21"),
                    document.getElementById("boton22"),
                    document.getElementById("boton23"),
                    document.getElementById("boton24"),
                    document.getElementById("boton25")
                    ];
    
    
    function inicio(){
        //hay que tratar de coger la variable del html mediante un input, poniendo el leer variable del plc dentro de value del input para recogerlo en una variable mediante el metodo de onsumit
        /*
        
        let formConsultarEstado = document.createElement("form");
        formConsultarEstado.onsubmit(setEstado(estadoParo));
        formConsultarEstado.method = "POST";
        formConsultarEstado.innerHTML = "<input name=\""
        

        //_____________________________
        let formCambioEstado = document.createElement('form');
        formCambioEstado.method = 'POST';

        formCambioEstado.innerHTML = "<!-- AWP_In_Variable Name=\'\"Bool\":\"paro\"\'--> <input name=\'\"Bool\":\"paro\"\' value=\"true\">";

        // el formulario debe estar en el document para poder enviarlo
        document.body.append(formCambioEstado);
 
        formCambioEstado.submit();
        return false;
        */

        if(=:"mis_datos".paro: == 0){
            let boton = document.getElementById("onOff");
            boton.value("OFF");
            boton.style.backgroundColor("red");
        }
        else{
            let boton = document.getElementById("onOff");
            boton.value("ON");
            boton.style.backgroundColor("green");

            document.getElementById("automatico").style.backgroundColor("green");
        }

    }
