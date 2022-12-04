var gEventoCaixa = false;
$(document).ready(() => {
	$("#idHexCorJQ").text($("#inputCor").val().toUpperCase());
	$("#inputCor").on("change", () => {
		$("#idHexCorJQ").text($("#inputCor").val().toUpperCase());
	});
	$("#idFusao").on("click", () => {
		if (!gEventoCaixa) {
			gEventoCaixa = true;
			$("body").append(
				"<div id='idCaixa' class='temp'><span id='idCaixaInt'></span></span></div>"
			);
			$("#idCaixa").animate(
				{
					bottom: 20,
					opacity: 1,
					left: "30%",
					width: "40%",
					height: "40%",
				},
				{
					duration: 800,
					easing: "swing",
					complete: () => {
						let vHexCorJQ = $("#inputCor").val();
						let vHexCorJS = $("#idAcontece").css("background-color");
						vHexCorJS = Rgb2Hex(vHexCorJS);
						$("#idHexCorJQ").append(
							"<span class='idCaixaMove' style='background-color: " +
								vHexCorJQ +
								"'></span>"
						);
						$("#idHexCorJS").append(
							"<span class='idCaixaMove' style='background-color: " +
								vHexCorJS +
								"'></span>"
						);
						let destino = $("#idCaixa");
						let xDestino =
							destino.offset().left +
							destino.width() / 2 -
							$("#inputCor").width() / 2;
						let yDestino =
							destino.offset().top +
							destino.height() / 2 -
							$("#inputCor").width() / 2;
						$(".idCaixaMove").animate(
							{
								left: xDestino,
								top: yDestino,
							},
							{
								duration: 800,
								complete: () => {
									$(".idCaixaMove").remove();

									let novaCor = CorMisturada(vHexCorJQ, vHexCorJS);
									// console.log(novaCor);
									$("#idCaixa").css("background", novaCor);
									$("#idCaixa").animate(
										{
											opacity: 0,
										},
										{
											duration: 3200,
											complete: () => {
												$(".temp").remove();
												gEventoCaixa = false;
											},
										}
									);
								},
							}
						);
					},
				}
			);
		}
	});
});
