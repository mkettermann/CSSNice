/**
 * OPERAÇÕES API: GET
 */
// CABECALHOS

// $request->setHeaders(array(
// 	'content-type' => 'application/json',
// 	'authorization' => 'Basic '. base64_encode("user:password"),
// 	'X-App-Trafegus' => 777
// ));

var endereco =
	"http://187.32.116.25/ws_rest/public/api/viagem?UltCodigo=480295";
var hCabecalhos = new Headers();

hCabecalhos.append(
	"Authorization",
	"Basic d3N2YWxpZGFjYW86d3N2YWxpZGExMjM="
	//"BASIC ".base64_encode("wsvalidacao:wsvalida123")
);
var requestOptions = {
	method: "GET",
	headers: hCabecalhos,
};
fetch(endereco, requestOptions)
	.then((response) => response.text())
	.then((dados) => {
		if (dados.length > 0) {
			document.querySelector(".divGet").innerHTML = dados;
		} else {
			document.querySelector(".divGet").innerHTML =
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
