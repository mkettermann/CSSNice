var ele;

/*CRIA O DROPDOWN e EVENTO LISTENER*/
const mkSeletorRenderizar = () => {
	document.querySelectorAll("input.mkSeletor").forEach((e) => {
		if (e.nextElementSibling.classList.contains("mkSeletorExibe")) {
			mkSeletorUpdate(e);
		} else {
			// CRIAR O BOTAO DE SELECAO
			let ePai = e.parentElement;
			let ePos = Array.from(ePai.children).indexOf(e);
			let divMkSeletorBloco = document.createElement("div");
			ePai.insertBefore(divMkSeletorBloco, ePai.children[ePos]);
			divMkSeletorBloco.className = "mkSeletorBloco";
			let divMkSeletorExibe = document.createElement("button");
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
			// LISTA DE ITENS
			let divMkSeletorList = document.createElement("div");
			divMkSeletorList.className = "mkSeletorList";
			divMkSeletorExibe.appendChild(divMkSeletorExibeSelecionado);
			divMkSeletorExibe.appendChild(divMkSeletorExibeFlexinha);
			divMkSeletorExibe.appendChild(divMkSeletorList);

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

			// POSICIONAMENTO DA LISTA
			//+ divMkSeletorExibe.offsetHeight
			divMkSeletorList.style.top = divMkSeletorExibe.offsetTop + "px";
			divMkSeletorList.style.left = divMkSeletorExibe.offsetLeft - 1 + "px";

			ele = divMkSeletorList;
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
