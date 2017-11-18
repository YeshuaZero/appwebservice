
$("#formulario").submit(function(evento){
	evento.preventDefault();
	console.log("Activando formulario...");
	var cadena=$(this).serializeArray();
	console.log(cadena);
	$.ajax({
		url:"http://localhost/prueba.php"
	}).done(function(respuesta){
		$(".mensaje").html(respuesta);
	});
});