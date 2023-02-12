// CABECALHOS
var endereco = "";
var hCabecalhos = new Headers();
hCabecalhos.append("Authorization", "Basic d3N2YWxpZGFjYW86d3N2YWxpZGExMjM=");

const inputEndereco = document.getElementById("inputEndereco");
inputEndereco.addEventListener("focusout", () => {
	mkGet(inputEndereco.value);
});

function mkGet(destino) {
	console.log("GET " + destino);
	// GET fetch() json()
	fetch(destino, {
		method: "GET",
		// headers: hCabecalhos,
		redirect: "follow",
	})
		.then((response) => response.text())
		.then((dados) => {
			if (dados.length > 0) {
				document.querySelector(".divGet").innerHTML = dados;
			} else {
				document.querySelector(".divGet").innerHTML =
					"CONTEUDO VAZIO - CHECK CONSOLE";
			}
		})
		.catch((error) => console.log("error", error));
}

endereco = "https://mkettermann.github.io/CSSNice/api_rest/mk.json";
// GET fetch() json()
var requestOptions = {
	method: "GET",
	// headers: hCabecalhos,
	redirect: "follow",
};
fetch(endereco, requestOptions)
	.then((response) => response.text())
	.then((dados) => {
		if (dados.length > 0) {
			document.querySelector(".divGet1").innerHTML = dados;
		} else {
			document.querySelector(".divGet1").innerHTML =
				"CONTEUDO VAZIO - CHECK CONSOLE";
		}
	})
	.catch((error) => console.log("error", error));
