var ele;

/* CRIA O DROPDOWN por FOCUS */
const mkSeletorRenderizar = () => {
	document.querySelectorAll("input.mkSeletor").forEach((e) => {
		if (!e.nextElementSibling.classList.contains("mkSeletorPesquisa")) {
			// COLETA
			let ePai = e.parentElement;
			let ePos = Array.from(ePai.children).indexOf(e);
			let eLarguraInicial = e.offsetWidth;
			let eAlturaInicial = e.offsetHeight;
			// ELEMENTO no BLOCO
			let divMkSeletorBloco = document.createElement("div");
			let divMkSeletorPesquisa = document.createElement("div");
			let divMkSeletorInputExibe = document.createElement("input");
			let divMkSeletorInputExibeArrow = document.createElement("div");
			let divMkSeletorList = document.createElement("div");
			// Nomeando Classes
			divMkSeletorBloco.className = "mkSeletorBloco";
			divMkSeletorPesquisa.className = "mkSeletorPesquisa";
			divMkSeletorInputExibe.className = "mkSeletorInputExibe";
			divMkSeletorInputExibeArrow.className = "mkSeletorInputExibeArrow";
			divMkSeletorList.className = "mkSeletorList";
			// ORDEM no DOM
			ePai.insertBefore(divMkSeletorBloco, ePai.children[ePos]);
			divMkSeletorBloco.appendChild(e);
			divMkSeletorBloco.appendChild(divMkSeletorPesquisa);
			divMkSeletorBloco.appendChild(divMkSeletorList);
			divMkSeletorPesquisa.appendChild(divMkSeletorInputExibe);
			divMkSeletorPesquisa.appendChild(divMkSeletorInputExibeArrow);
			// SET Tamanho COM BASE NA Coleta
			divMkSeletorPesquisa.style.width = eLarguraInicial + "px";
			divMkSeletorPesquisa.style.height = eAlturaInicial + "px";
			divMkSeletorInputExibe.setAttribute("placeholder", "Filtrar\u{2710}");
			divMkSeletorInputExibe.setAttribute(
				"onfocus",
				"mkSeletorPesquisaFocus(this)"
			);
			divMkSeletorInputExibe.setAttribute(
				"onblur",
				"mkSeletorPesquisaBlur(this)"
			);
			divMkSeletorInputExibe.setAttribute(
				"oninput",
				"mkSeletorPesquisaInput(this)"
			);
			// GERA CADA ITEM DA LISTA COM BASE NO JSON
			let seletorArray = JSON.parse(e.getAttribute("data-seletorarray"));
			seletorArray.forEach((o) => {
				let divMkSeletorItem = document.createElement("div");
				let divMkSeletorItemTexto = document.createElement("span");
				let divMkSeletorItemArrow = document.createElement("div");
				divMkSeletorItem.className = "mkSeletorItem";
				divMkSeletorItemArrow.className = "mkSeletorItemArrow";
				divMkSeletorItem.setAttribute("data-k", o.k);
				divMkSeletorItem.setAttribute(
					"onmousedown",
					"mkSeletorSelecionar(this)"
				);
				divMkSeletorItemTexto.innerHTML = o.v;
				divMkSeletorItem.appendChild(divMkSeletorItemTexto);
				divMkSeletorItem.appendChild(divMkSeletorItemArrow);
				divMkSeletorList.appendChild(divMkSeletorItem);

				/* Cria a Arrow */
				if (e.value == o.k) {
					divMkSeletorItem.setAttribute("data-s", "1");
				} else {
					divMkSeletorItem.setAttribute("data-s", "0");
				}
			});
			// Seleciona baseado no value do input
			mkSeletorUpdate(e);

			// TAMANHOS E POSICOES DA LISTA
			//e.classList.add("mkSecreto");
			let alturaLista =
				divMkSeletorPesquisa.offsetTop + divMkSeletorPesquisa.offsetHeight;
			divMkSeletorList.style.top = alturaLista + "px";
			divMkSeletorList.style.left = divMkSeletorPesquisa.offsetLeft - 1 + "px";
			divMkSeletorList.style.minWidth = divMkSeletorPesquisa.offsetWidth + "px";
		}
	});
};

const mkSeletorSelecionar = (e) => {
	let selLimit =
		e.parentElement.parentElement.firstElementChild.getAttribute(
			"data-selapenas"
		);
	e.parentElement.parentElement.firstElementChild.value =
		e.getAttribute("data-k");
	e.parentElement.parentElement.children[1].firstElementChild.value =
		e.innerHTML;
	if (selLimit > 1) {
		console.log("Pode Selecionar: " + selLimit);
		setTimeout(() => {
			e.parentElement.parentElement.children[1].firstElementChild.focus();
		}, 1);
	}
};

const mkSeletorPesquisaFocus = (e) => {
	e.value = "";
	Array.from(e.parentElement.nextElementSibling.children).forEach((el) => {
		el.style.display = "";
	});
};

const mkSeletorPesquisaBlur = (e) => {
	mkSeletorUpdate(e.parentElement.parentElement.firstElementChild);
};

const mkSeletorPesquisaInput = (e) => {
	ele = e.value;
	Array.from(e.parentElement.nextElementSibling.children).forEach((el) => {
		let exibe = false;
		if (el.innerHTML.toLowerCase().match(e.value.toLowerCase())) {
			exibe = true;
		}
		if (exibe) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	});
};

/* EVENTO: Atualiza lista*/
const mkSeletorUpdate = (e) => {
	let seletorArray = JSON.parse(e.getAttribute("data-seletorarray"));
	let naoAchou = true;
	seletorArray.forEach((o) => {
		if (e.value == o.k) {
			e.nextElementSibling.firstElementChild.value = o.v;
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
