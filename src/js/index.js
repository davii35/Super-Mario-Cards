const botaoVoltar = document.getElementById("btn-voltar");
const botaoAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let i = 0;
const segundoCartao = 1;
const penultimoCartao = cartoes.length - 2;

function escondeCartaoAnterior() {
    cartoes[i].classList.remove("selecionado");
}

function mostraCartao() {
    cartoes[i].classList.add("selecionado");
}

botaoVoltar.addEventListener("click", function () {
    if (i === segundoCartao) {
        botaoVoltar.style.visibility = "hidden";
    }
    botaoAvancar.style.visibility = "visible";
    escondeCartaoAnterior();
    i--;
    mostraCartao();
})

botaoAvancar.addEventListener("click", function () {
    if (i === penultimoCartao) {
        botaoAvancar.style.visibility = "hidden";
    }
    botaoVoltar.style.visibility = "visible";
    escondeCartaoAnterior();
    i++;
    mostraCartao();
})