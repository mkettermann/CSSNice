const iAcontece = document.getElementById("idAcontece");
const iHexCorJS = document.getElementById("idHexCorJS");

const fMudaCor = () => {
	let corGerada = CorAleatoria();
	iAcontece.style.backgroundColor = corGerada;
	// console.info("Cor: " + iAcontece.style.backgroundColor);
	iHexCorJS.innerHTML = corGerada;
};

const CorAleatoria = () => {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

const CorMisturada = (cor1, cor2) => {
	cor1 = Hex2Rgb(cor1);
	cor2 = Hex2Rgb(cor2);
	let r = (cor1.r + cor2.r) / 2;
	let g = (cor1.g + cor2.g) / 2;
	let b = (cor1.b + cor2.b) / 2;
	return "rgb(" + r + "," + g + "," + b + ")";
};

const Rgb2Hex = (rgb) =>
	`#${rgb
		.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
		.slice(1)
		.map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
		.join("")}`;

const Hex2Rgb = (hex) => {
	let re = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return re
		? {
				r: parseInt(re[1], 16),
				g: parseInt(re[2], 16),
				b: parseInt(re[3], 16),
		  }
		: null;
	// return "rgb(" + re.r + "," + re.g + "," + re.b + ")";
};
const iJson = document.getElementById("idJson");
let letterM = "M";
let letterK = "K";
const meuNome = `${letterM}${letterK}`;
let jsonA = { Nome: meuNome, Pontos: 9 };
let jsonB = { ...jsonA, Pontos: jsonA.Pontos ** 2 };

const jsonCombo = [jsonA, jsonB];

iJson.innerHTML = jsonCombo;
const fMostraJson = () => {
	iJson.innerHTML = JSON.stringify(jsonCombo);
	// console.log(jsonCombo);
};

fMudaCor();
