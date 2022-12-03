const iAcontece = document.getElementById("idAcontece");
const iHexCorJS = document.getElementById("idHexCorJS");
iAcontece.innerHTML = "Arrow Func";

const fMudaCor = () => {
	let corGerada = CorAleatoria();
	iAcontece.style.backgroundColor = corGerada;
	console.info("Cor: " + iAcontece.style.backgroundColor);
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
	cor1.replace("#", "");
	cor2.replace("#", "");
	let mistura = [];
	for (var i = 0; i < 6; i += 2) {
		mistura[i] = Math.round(
			(parseInt(cor1[i] + cor1[i + 1], 16) +
				parseInt(cor2[i] + cor2[i + 1], 16)) /
				2
		);
		mistura[i] = (0x1000000 | mistura[i]).toString(16).substring(5);
	}
	mistura = "#" + mistura.join("");
	return mistura;
};

const Rgb2Hex = (rgb) =>
	`#${rgb
		.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
		.slice(1)
		.map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
		.join("")}`;

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
	console.log(jsonCombo);
};

fMudaCor();
