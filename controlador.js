function setUpControlador(){
    var luzRoja = document.getElementById("botonRojo");
    var luzAmarillo = document.getElementById("botonAmarillo");
    var luzVerde = document.getElementById("botonVerde");
    var luzAzul = document.getElementById("botonAzul");
    var ArrayOnzas = [document.getElementById("contOnzas1"),
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
    
    
    function encendido(){
        //hay que tratar de coger la variable del html mediante un input, poniendo el leer variable del plc dentro de value del input para recogerlo en una variable mediante el metodo de onsumit
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
    }
}