/*TIMER DE BUSCA: CRIA O DROPDOWN e EVENTO LISTENER*/
var elemento;
setTimeout(() => {
	document.querySelectorAll("input.mkSeletor").forEach((e) => {
		if (e.nextElementSibling.classList.contains("mkSeletorExibe")) {
			console.log("achou");
		} else {
			let ePai = e.parentElement;
			elemento = e;
			let divMkSeletorBloco = document.createElement("div");
			divMkSeletorBloco.className = "mkSeletorBloco";
			ePai.appendChild(divMkSeletorBloco);
			let divMkSeletorExibe = document.createElement("div");
			divMkSeletorExibe.className = "mkSeletorExibe";
			divMkSeletorExibe.style.width = e.offsetWidth + 2 + "px";
			divMkSeletorExibe.style.height = e.offsetHeight + 2 + "px";
			divMkSeletorBloco.appendChild(e);
			divMkSeletorBloco.appendChild(divMkSeletorExibe);

			// e.classList.add("mkSecreto");
		}
		console.log("Sel Limit: " + e.getAttribute("data-selapenas"));
		console.log("Array Exibe: " + e.getAttribute("data-seletorarray"));
		console.log(JSON.parse(e.getAttribute("data-seletorarray")));
	});
}, 1000);

/* EVENTO: Atualiza lista*/
