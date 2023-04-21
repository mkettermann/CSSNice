var ele;

/*CRIA O DROPDOWN e EVENTO LISTENER*/
const mkSeletorRenderizar = () => {
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

			// DropDown
			let divMkSeletorList = document.createElement("div");
			divMkSeletorList.className = "mkSeletorList";
			divMkSeletorBloco.appendChild(divMkSeletorList);
			let seletorArray = JSON.parse(e.getAttribute("data-seletorarray"));
			seletorArray.forEach((o) => {
				let divMkSeletorItem = document.createElement("div");
				divMkSeletorItem.className = "mkSeletorItem";
				divMkSeletorItem.setAttribute("data-k", o.k);
				divMkSeletorItem.innerHTML = o.v;
				divMkSeletorList.appendChild(divMkSeletorItem);
			});
			// LISTENERS
			//divMkSeletorExibe.addEventListener("click", console.log("VaiAbrir"));

			ele = divMkSeletorExibe;
			mkSeletorUpdate(e);
			//e.classList.add("mkSecreto");
		}
	});
};

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

/*INICIALIZA e GERA TIMER de busca por novos elementos*/
mkSeletorRenderizar();
setInterval(() => {
	mkSeletorRenderizar();
}, 2000);
