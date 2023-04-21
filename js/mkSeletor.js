/*TIMER DE BUSCA: CRIA O DROPDOWN e EVENTO LISTENER*/
var elemento;
setInterval(() => {
	document.querySelectorAll("input.mkSeletor").forEach((e) => {
		if (e.nextElementSibling.classList.contains("mkSeletorExibe")) {
			mkSeletorUpdate(e);
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
			let divMkSeletorExibeSelecionado = document.createElement("div");
			divMkSeletorExibeSelecionado.className = "mkSeletorExibeSelecionado";
			let divMkSeletorExibeFlexinha = document.createElement("div");
			divMkSeletorExibeFlexinha.className = "mkSeletorExibeFlexinha";
			divMkSeletorExibeFlexinha.innerHTML =
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';

			divMkSeletorExibe.appendChild(divMkSeletorExibeSelecionado);
			divMkSeletorExibe.appendChild(divMkSeletorExibeFlexinha);

			mkSeletorUpdate(e);
			// e.classList.add("mkSecreto");
		}
	});
}, 2000);

/* EVENTO: Atualiza lista*/
const mkSeletorUpdate = (e) => {
	let selLimit = e.getAttribute("data-selapenas");
	let seletorArray = JSON.parse(e.getAttribute("data-seletorarray"));
	let naoAchou = true;
	seletorArray.forEach((o) => {
		if (e.value == o.k) {
			e.nextElementSibling.firstElementChild.innerHTML = o.v;
			naoAchou = false;
		}
	});
	if (naoAchou) {
		e.nextElementSibling.firstElementChild.innerHTML = "";
	}
};
