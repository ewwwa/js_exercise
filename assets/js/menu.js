$(document).ready(function() {
//selector fijo cuando se clica
$('ul:first li a').click(function() {
	//se quitan los todos atributos de la clase para luego añadirlo 
	$('.current-menu-item').removeClass();
	$(this).parent().addClass('current-menu-item');

});
});