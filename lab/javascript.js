function mostrarMenu() {
    document.getElementById("menu-vertical").style.width = "30%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "none";
};


function ocultarMenu() {
    document.getElementById("menu-vertical").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "inline";
};


function mostrarUsuario() {
    document.getElementById("usuario-vertical").style.width = "40%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "none";
};


function ocultarUsuario() {
    document.getElementById("usuario-vertical").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "inline";

};
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


