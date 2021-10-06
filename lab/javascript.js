//funciones luces
function ajax_get_json(url){
    var xmlhttp = new XMLHttpRequest();
    var datos;

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState === 4 &&
            xmlhttp.status === 200){
				console.log(xmlhttp.response + typeof xmlhttp.response)
                datos = JSON.parse(xmlhttp.response);
            }
    }

    xmlhttp.open("POST", url, true);
    xmlhttp.send();

    return datos;
}
//funciones Boton
var onOff = document.getElementById("onOff");
    onOff.value="Off";
    onOff.style.backgroundColor="red";
    onOff.addEventListener("click", clickOn);

function crearFormulario(){
	let formMarcha = document.createElement("form");
	formMarcha.setAttribute("id", "formularioMarcha");
	formMarcha.innerHTML = "<!-- AWP_In_Variable Name='\"mis_datos\"'--><input name='\"mis_datos\".martxa' value=1/>"
	document.body.append(formMarcha);
	
	$.ajax({
		type: "POST",
		url: $("#formularioMarcha").attr('action'),
		data: $("#formularioMarcha").serialize()
	});
	
	console.log(:="mis_datos".martxa:);
}

function leerCiclo(){
    var xmlhttp = new XMLHttpRequest();
    var datoCiclo;

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState === 4 &&
            xmlhttp.status === 200){
                datos = xmlhttp.response;
            }
    }

    xmlhttp.open("POST", "./leerciclo.html", true);
    xmlhttp.send();

    return datoCiclo;
}

function clickOn(){
	//Creacion de variables
	
	if(onOff.value="Off"){
    onOff.style.backgroundColor="green";
    onOff.value="ON";
	crearFormulario();
	
	/*
	var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState === 4 &&
				xmlhttp.status === 200){
					console.log("funciona 200");
					let formMarcha = document.createElement("form");
					formMarcha.method="POST";
					formMarcha.innerHTML = "<!-- AWP_In_Variable Name='\"mis_datos\"'--><input name='\"mis_datos\".martxa' value=1/>"
					document.body.append(formMarcha);
					formMarcha.submit();
			}
		}
		xmlhttp.open("POST", "./index.html" , true);
		xmlhttp.send();*/
		console.log("funciona fuera");
	}

    var luces = ajax_get_json("./luces.html");

    for( var color in luces){
        if(luces[color] == 1){
            document.getElementById(color).opacity(1);
        }
    }
	console.log(JSON.parse(luces));
	
	var onzas = ajax_get_json("./onzas.html");
	leerciclo();
	while(nuevoCiclo==1){
		arrayOnzas.forEach(elemento => {
			for (var tipoOnza in onzas){
				
				switch(tipoOnza){
					case 0: let elemento => elemento.src="./img/vacio.jpg";
					break;
					
					case 1: let elemento => elemento.src="./img/blanco.jpg";;
					break;
					
					case 2: let elemento => elemento.src="./img/negro.jpg";;
					break;
				}
			}
		});
	}
}

//arranqueMaquina
function startControlador(){
//cambiar el id hacia las imagenes
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
//mostrar index
function mostrarMenu() {
    document.getElementById("menu-vertical").style.width = "30%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "none";
};

//ocultar index
function ocultarMenu() {
    document.getElementById("menu-vertical").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "inline";
};

//mostrar barra usu
function mostrarUsuario() {
    document.getElementById("usuario-vertical").style.width = "30%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "none";
};

//ocultar barra usu
function ocultarUsuario() {
    document.getElementById("usuario-vertical").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "inline";

};
//validar formulario
function validar() {
    try{    
        let nombre = document.getElementById("nombre").value;
        let telefono = document.getElementById("telefono").value;
        let correo = document.getElementById("correo").value;
        let mensaje = document.getElementById("mensaje").value;

        let exNombre = new RegExp(/^[A-Z]{1}[a-z]+$/);
        let exTelefono = new RegExp(/^[0-9]{9}$/);
        let exCorreo = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/);

        if(!exNombre.test(nombre)){
            throw "El nombre esta vacio o es incorrecto";
        }
        if(!exTelefono.test(telefono)){
            throw "El telefono esta vacio o es incorrecto";
        }
        if(!exCorreo.test(correo)){
            throw "El correo esta vacio o es incorrecto";
        }

        if(mensaje == ""){
            throw "Debe escribir un mesaje "
        }
    
    var img=document.createElement("img");
    img.src="logochoco2.png";
    let cuerpo = " Hola buenas. \nEl cliente con el nombre " + nombre + " con telefono " + telefono + " y correo electronico " + correo + " desea mandar el siguiente mensaje:\n \"" + mensaje + "\"\n Un saludo" + logo;

    alert("Se a enviado correctamente");
    window.open('mailto:messa@gmail.com?body=' + cuerpo);
    }
    catch(err){
        alert(err);
    } 
};
//Boton arriba
window.onscroll = function(){
    if(document.documentElement.scrollTop>100){
        document.querySelector('.ir-arriba')
        .classList.add('show');
    }
    else{
        document.querySelector('.ir-arriba')
        .classList.remove('show');
    }
};

document.querySelector('.ir-arriba')
.addEventListener('click', () =>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
});


