/**
 * OPERAÇÕES API: GET
 */

// GET XML com 200
var reqGetUser = new XMLHttpRequest();
var endereco = "https://reqres.in/api/users/1";
reqGetUser.onreadystatechange = function () {
  if (this.status == 200) {
    //var dadosArray = JSON.parse(this.responseText);
    //console.log(dadosArray.data);
    document.querySelector(".divGet").innerHTML = this.responseText;
  }
};
reqGetUser.open("GET", endereco, true);
reqGetUser.send();

// GET XML onload
var reqGetUser1 = new XMLHttpRequest();
reqGetUser1.open("GET", "https://reqres.in/api/users/1", true);
reqGetUser1.onload = function () {
  document.querySelector(".divGet1").innerHTML = reqGetUser1.responseText;
};
reqGetUser1.send();

// GET fetch() json()
endereco = "https://reqres.in/api/users"; //Array
fetch(endereco)
  .then((dados) => dados.json())
  .then((dados) => {
    if (dados.data.length > 0) {
      dados.data.forEach((item) => {
        document.querySelector(".divGet2").innerHTML += JSON.stringify(item);
      });
    }
  });

/**
 * OPERAÇÕES API: POST
 */

// POST fetch() json()
var endereco = "https://reqres.in/api/users";
const pacote = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 7,
    email: "aa@aa.com",
    first_name: "Marcos",
    last_name: "K",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
  }),
};

fetch(endereco, pacote)
  .then((response) => response.json())
  .then((update) => {
    console.log(update);
  });
