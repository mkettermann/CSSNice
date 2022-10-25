/**
 * OPERAÇÕES API: GET
 */
// CABECALHOS
var endereco =
	"http://10.1.150.8/Gerenciador/Sistemas/Servidor/ListaServidores";
var hCabecalhos = new Headers();
hCabecalhos.append(
	"Authorization",
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFyY29zIEtldHRlcm1hbm4iLCJuYmYiOjE2NjY2OTc3NzcsImV4cCI6MTY2NjcwMTM3NywiaWF0IjoxNjY2Njk3Nzc3fQ.0Kc7VOSYczr1MG_3g-QWbac7gzeLZ4l0XKHKuzRWLY8"
);

// GET XML com 200 SEM HEADER
var reqGetUser = new XMLHttpRequest();
reqGetUser.onreadystatechange = function () {
	if (this.status == 200) {
		//var dadosArray = JSON.parse(this.responseText);
		//console.log(dadosArray.data);
		document.querySelector(".divGet").innerHTML = this.responseText;
	}
};
reqGetUser.open("GET", endereco, true);
reqGetUser.send();

// GET XML onload SEM HEADER
var reqGetUser1 = new XMLHttpRequest();
reqGetUser1.open("GET", endereco, true);
reqGetUser1.onload = function () {
	document.querySelector(".divGet1").innerHTML = reqGetUser1.responseText;
};
reqGetUser1.send();

// GET fetch() json()
var requestOptions = {
	method: "GET",
	headers: hCabecalhos,
	redirect: "follow",
};
fetch(endereco, requestOptions)
	.then((response) => response.text())
	.then((dados) => {
		if (dados.length > 0) {
			document.querySelector(".divGet2").innerHTML = dados;
		} else {
			document.querySelector(".divGet2").innerHTML =
				"CONTEUDO VAZIO - CHECK CONSOLE";
		}
	})
	.then((result) => console.log(result))
	.catch((error) => console.log("error", error));

// endereco = "http://10.1.150.8/Gerenciador/Sistemas/Servidor/ListaServidores"; //Array
// fetch(endereco, {
// 	method: "GET", // *GET, POST, PUT, DELETE, etc.
// 	mode: "*cors", // no-cors, *cors, same-origin
// 	cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
// 	credentials: "include", // include, *same-origin, omit
// 	headers: new Headers({
// 		Authorization:
// 			"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFyY29zIEtldHRlcm1hbm4iLCJuYmYiOjE2NjY2OTc3NzcsImV4cCI6MTY2NjcwMTM3NywiaWF0IjoxNjY2Njk3Nzc3fQ.0Kc7VOSYczr1MG_3g-QWbac7gzeLZ4l0XKHKuzRWLY8",
// 		"Content-Type": "application/x-www-form-urlencoded",
// 	}),
// 	redirect: "follow", // manual, *follow, error
// 	referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
// 	body: JSON.stringify(data), // body data type must match "Content-Type" header
// })
// 	.then((dados) => dados.json())
// 	.then((dados) => {
// 		if (dados.data.length > 0) {
// 			dados.data.forEach((item) => {
// 				document.querySelector(".divGet2").innerHTML += JSON.stringify(item);
// 			});
// 		}
// 	});

/**
 * OPERAÇÕES API: POST
 */

// POST fetch() json()
//var endereco = "https://reqres.in/api/users";
// var endereco =
// 	"http://10.1.150.8/Gerenciador/Sistemas/Servidor/ListaServidores";
// const pacote = {
// 	method: "POST",
// 	headers: {
// 		"Content-Type": "application/json",
// 	},
// 	body: JSON.stringify({
// 		id: 7,
// 		email: "aa@aa.com",
// 		first_name: "Marcos",
// 		last_name: "K",
// 		avatar: "https://reqres.in/img/faces/1-image.jpg",
// 	}),
// };

// fetch(endereco, pacote)
// 	.then((response) => response.json())
// 	.then((update) => {
// 		console.log(update);
// 	});
