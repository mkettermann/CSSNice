const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const personagens = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let primeiraCarta = '';
let segundaCarta = '';

const checkWin = () => {
    const disableCards = document.querySelectorAll('.cartaDesativada');
    if(disableCards.length == 20){
        clearInterval(this.loop);
        alert(`Parabens ${spanPlayer.innerHTML}.\n Você VENCEU em ${timer.innerHTML}s`);
    }
}
const checkCards = () => {
    const primeiroPersonagem = primeiraCarta.getAttribute('data-personagem');
    const segundaPersonagem = segundaCarta.getAttribute('data-personagem');

    if (primeiroPersonagem == segundaPersonagem) {
        primeiraCarta.firstChild.classList.add('cartaDesativada');
        segundaCarta.firstChild.classList.add('cartaDesativada');
        primeiraCarta = '';
        segundaCarta = '';

        checkWin();
    } else {
        setTimeout(() => {
            primeiraCarta.classList.remove('revelarcard');
            segundaCarta.classList.remove('revelarcard');
            primeiraCarta = '';
            segundaCarta = '';
        }, 500);

    }
}

const fRevelarCarta = ({ target }) => {
    if (target.parentNode.className.includes('revelarcard')) {
        return;
    }

    if (primeiraCarta == '') {
        target.parentNode.classList.add('revelarcard');
        primeiraCarta = target.parentNode;
    } else if (segundaCarta == '') {
        target.parentNode.classList.add('revelarcard');
        segundaCarta = target.parentNode;
        checkCards();
    }

}

const createCard = (personagem) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${personagem}.png')`;

    card.appendChild(front);
    card.appendChild(back);
    card.addEventListener('click', fRevelarCarta);
    card.setAttribute('data-personagem', personagem);
    return card;
}

const loadingGame = () => {
    const duplicarPersonagens = [...personagens, ...personagens];
    const embaralhadosPersonagens = duplicarPersonagens.sort(() => Math.random() - 0.5);

    embaralhadosPersonagens.forEach((personagem) => {
        const card = createCard(personagem);
        grid.appendChild(card);
    })
}

const startTimer = () => {
    this.loop = setInterval(()=>{
        const currentTimer = +timer.innerHTML;
        timer.innerHTML = currentTimer + 1
    },1000);
}

window.onload = () =>{
    spanPlayer.innerHTML = localStorage.getItem('nome');
    startTimer();
    loadingGame();
}