
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
    document.getElementById("usuario-vertical").style.width = "40%";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "none";
};

//ocultar barra usu
function ocultarUsuario() {
    document.getElementById("usuario-vertical").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("menu").style.display = "inline";
    if(screen.width <= 480 ){
        document.getElementById("menu").style.display = "none";
    }
    else{
        document.getElementById("menu").style.display = "inline";
    };
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
            throw "Debe escribir un mensaje "
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

var admin = [{usuario: "root",con: "root"},{usuario: "jefe",con: "12345Abcde"}];

function entrar(){
try{

   let usuarios = document.getElementById("usuarios").value;
   let contrasena = document.getElementById("contrasena").value;

   if(usuarios == "" || contrasena == ""){
        throw "No puede dejar campos en blanco"
    }

   let x = admin.find(adm=> adm.usuario == usuarios && adm.con == contrasena);

   if(x == undefined){
       alert("Usuario o contraseña incorrecto")
   }
   else{
       alert("Bienvenido " + usuarios)
        ocultarUsuario();
        let div = document.getElementById("login");
        let divLateral = document.getElementById("usuario");
        let controlador = document.getElementById("controlador");
        let maquina = document.getElementById("maquina");
        div.style.display= "none";
        divLateral.style.display= "none";
        controlador.style.display = "block";
        maquina.style.display = "block";
   }
}
    catch(err){
        alert(err);
    }
}


function entrarVertical(){
try{    
    let usuarios = document.getElementById("usuarios-vertical").value;
    let contrasena = document.getElementById("contrasena-vertical").value;
    
    if(usuarios == "" || contrasena == ""){
        throw "No puede dejar campos en blanco";
    }

    let x = admin.find(adm=> adm.usuario == usuarios && adm.con == contrasena);
 
    if(x == undefined){
        alert("Usuario o contraseña incorrecto");
    }
    else{
        alert("Bienvenido " + usuarios)
        ocultarUsuario();
         let div = document.getElementById("login");
         let divLateral = document.getElementById("usuario");
         let controlador = document.getElementById("controlador");
         let maquina = document.getElementById("maquina");
         div.style.display= "none";
         divLateral.style.display= "none";
         controlador.style.display = "block";
         maquina.style.display = "block";
    }
    }
    catch(err){
        alert(err);
    }
 }