const ano = document.querySelector("#anoatual");

const ultima_modificacao = document.querySelector("#ultima-mdificacao");
ultima_modificacao.innerHTML = `<span>${document.lastModified}</span>`

const hoje = new Date();
ano.innerHTML = `<span>${hoje.getFullYear()}</span>`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const sensacao = calcularSensacaoTermica(temperatura, velocidade);

if (temperatura <= 10 && velocidade > 4.8) {
    windChill.textContent = sensacao;
} else {
    windChill.textContent = "N/A";
}