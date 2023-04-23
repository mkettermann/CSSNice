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
			divMkSeletorInputExibe.setAttribute("placeholder", "Filtro \u{1F50D}");
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
			});
			// Seleciona baseado no value do input
			mkSeletorUpdate(e);

			// TAMANHOS E POSICOES DA LISTA
			e.classList.add("mkSecreto");
			let alturaLista =
				divMkSeletorPesquisa.offsetTop + divMkSeletorPesquisa.offsetHeight;
			divMkSeletorList.style.top = alturaLista + "px";
			divMkSeletorList.style.left = divMkSeletorPesquisa.offsetLeft - 1 + "px";
			divMkSeletorList.style.minWidth = divMkSeletorPesquisa.offsetWidth + "px";
		}
	});
};
/* Ao Tentar Selecionar um novo item */
const mkSeletorSelecionar = (eItem) => {
	let ePrincipal = eItem.parentElement.parentElement.firstElementChild;
	// Obtem limite de seleções
	let selLimit = Number(ePrincipal.getAttribute("data-selapenas"));
	// Obtem seleções
	let selecoes = ePrincipal.value.split(",");
	// QUANDO O LIMITE é 1
	if (selLimit == 1) {
		// Muda valor do input pelo clicado
		ePrincipal.value = eItem.getAttribute("data-k");
		// Transfere valor para o Display (Exibe)
		eItem.parentElement.previousElementSibling.firstElementChild.value =
			eItem.innerHTML;
	} else if (selLimit > 1 || selLimit < 0) {
		itemK = eItem.getAttribute("data-k");
		// Verifica se já tem o item clicado, para saber se vai adicionar / remover
		let jaSelecionado = 0;
		selecoes.forEach((itemS) => {
			if (itemS == itemK) jaSelecionado++;
		});
		if (jaSelecionado > 0) {
			// Remove valor
			selecoes.splice(selecoes.indexOf(itemK), 1);
		} else {
			// Verifica se é possivel selecionar mais (Se estiver negativo, pode selecionar infinito)
			if (selecoes.length < selLimit || selLimit < 0) {
				// Acrescenta valor
				selecoes.push(itemK);
			}
		}
		// Limpar seleções vazias
		selecoes.forEach((item) => {
			if (item == "") selecoes.splice(selecoes.indexOf(item), 1);
		});

		// Seta o valor no campo de input
		ePrincipal.value = selecoes.toString();

		// Mantem foco no Display, pois pode selecionar mais de um
		setTimeout(() => {
			eItem.parentElement.previousElementSibling.firstElementChild.focus();
		}, 1);
	}
	mkSeletorUpdate(ePrincipal);
};

/* EVENTO de Pesquisa (FOCUS) */
const mkSeletorPesquisaFocus = (e) => {
	e.value = "";
	Array.from(e.parentElement.nextElementSibling.children).forEach((el) => {
		el.style.display = "";
	});
};
/* EVENTO de Pesquisa (BLUR) */
const mkSeletorPesquisaBlur = (e) => {
	mkSeletorUpdate(e.parentElement.parentElement.firstElementChild);
};
/* EVENTO de Pesquisa (INPUT) */
const mkSeletorPesquisaInput = (e) => {
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

/* ATUALIZA Display e Selecionados*/
const mkSeletorUpdate = (e) => {
	// Obtem seleções
	let selecoes = e.value.split(",");
	/* Desmarcar todos mkSeletorItem pra 0 */
	Array.from(e.nextElementSibling.nextElementSibling.children).forEach((el) => {
		el.setAttribute("data-s", "0");
	});
	/* Exibe Titulo */
	let seletorArray = JSON.parse(e.getAttribute("data-seletorarray"));
	let naoAchou = true;
	selecoes.forEach((vSelecionado) => {
		seletorArray.forEach((o) => {
			if (vSelecionado == o.k) {
				e.nextElementSibling.firstElementChild.value = o.v;
				naoAchou = false;
				/* Marcar mkSeletorItem pra 1 onde encontrou */
				Array.from(e.nextElementSibling.nextElementSibling.children).forEach(
					(item) => {
						if (item.getAttribute("data-k") == o.k) {
							item.setAttribute("data-s", "1");
						}
					}
				);
			}
		});
	});
	if (naoAchou) {
		console.log("Não Achou o item selecionado na array de opções.");
		e.nextElementSibling.firstElementChild.value = "\u{2209}";
	}
};

/* INICIALIZA e GERA TIMER de busca por novos elementos */
mkSeletorRenderizar();
setInterval(() => {
	mkSeletorRenderizar();
}, 2000);
