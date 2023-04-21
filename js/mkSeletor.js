/*TIMER DE BUSCA: CRIA O DROPDOWN e EVENTO LISTENER*/
var elemento;
setInterval(() => {
	document.querySelectorAll("input.mkSeletor").forEach((e) => {
		if (e.nextElementSibling.classList.contains("mkSeletorExibe")) {
			mkSeletorUpdate(e);
		} else {
			// CRIAR ELEMENTOS
			let ePai = e.parentElement;
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
			divMkSeletorExibeFlexinha.innerHTML = "";
			divMkSeletorExibe.appendChild(divMkSeletorExibeSelecionado);
			divMkSeletorExibe.appendChild(divMkSeletorExibeFlexinha);
			// divMkSeletorExibeFlexinha.style.marginLeft =
			// 	-(divMkSeletorExibeFlexinha.offsetWidth - 2) + "px";
			let divMkSeletorList = document.createElement("div");
			divMkSeletorBloco.appendChild(divMkSeletorList);
			// LISTENERS
			//divMkSeletorExibe.addEventListener("click", console.log("VaiAbrir"));

			elemento = divMkSeletorExibe;
			mkSeletorUpdate(e);
			//e.classList.add("mkSecreto");
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
