const ano = document.querySelector("#anoatual");



const ultima_modificacao = document.querySelector("#ultima-mdificacao");
ultima_modificacao.innerHTML = `<span>${document.lastModified}</span>`

const hoje = new Date();
ano.innerHTML = `<span>${hoje.getFullYear()}</span>`;

const elementQuant = document.querySelector("#spam-qtd-avaliacoes");

let numAval = Number(window.localStorage.getItem("spam-qtd-avaliacoes"));

if (numAval != 0) {
    elementQuant.textContent = numAval;
} else {
    elementQuant.textContent = `Esta é a primeira avaliação!`
}

numAval++;
localStorage.setItem("spam-qtd-avaliacoes", numAval);