$(document).ready(function() {
//selector fijo cuando se clica
$('ul:first li a').click(function() {
	//se quitan los todos atributos de la clase para luego añadirlo 
	$('.current-menu-item').removeClass();
	$(this).parent().addClass('current-menu-item');

});
	//aparece el submenu en hover en el primer li de ul 
	$('ul:first li').hover(function(){
		$(this).find('.sub-menu').fadeToggle(300);
	});
});