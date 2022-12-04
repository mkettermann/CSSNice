var $nav = $("nav");
var $listas = $nav.find("li");
$("#totalItens").html($listas.length);
$listas.css("background", "#555");
$nav.css("padding-top", "10px");

$listas
	.animate({ width: "-=50" }, 200)
	.fadeOut()
	.fadeIn("slow")
	.animate({ width: "-=50" }, 200);
var $segundo = $nav.find("li");
