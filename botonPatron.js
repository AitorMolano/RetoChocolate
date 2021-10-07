function crearFormPatron1(){
	let formPatron = document.createElement("form");
	formMarcha.setAttribute("id", "formularioPatron");
	formPatron.innerHTML = "<!-- AWP_In_Variable Name='\"mis_datos\"'--><input name='\"mis_datos\".marrazkiAuto' value=0/>"
    document.body.append(formPatron);
	
	$.ajax({
		type: "POST",
		url: $("#formularioPatron").attr('action'),
		data: $("#formularioPatron").serialize()
	});
}

function clickPatron1(){

    patron1.style.backgroundColor="green";
    patron2.style.backgroundColor="gray";

	crearFormPatron1();
	
    var luces = ajax_get_json("./luces.html");

    for( var color in luces){
        if(luces[color] == 1){
            document.getElementById(color).opacity(1);
        }
    }
	console.log(JSON.parse(luces)); 
}

//____

function crearFormPatron2(){
	let formPatron = document.createElement("form");
	formMarcha.setAttribute("id", "formularioPatron");
    formPatron.innerHTML = "<!-- AWP_In_Variable Name='\"mis_datos\"'--><input name='\"mis_datos\".marrazkiAuto' value=1/>"
    document.body.append(formPatron);
	
	$.ajax({
		type: "POST",
		url: $("#formularioPatron").attr('action'),
		data: $("#formularioPatron").serialize()
	});
}

function clickPatron2(){

    patron2.style.backgroundColor="green";
    patron1.style.backgroundColor="gray";
    
	crearFormPatron2();
	
    var luces = ajax_get_json("./luces.html");

    for( var color in luces){
        if(luces[color] == 1){
            document.getElementById(color).opacity(1);
        }
    }
	console.log(JSON.parse(luces)); 
}