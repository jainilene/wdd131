const ano = document.querySelector("#anoatual");

const ultima_modificacao = document.querySelector("#ultima-mdificacao");
ultima_modificacao.innerHTML = `<span>${document.lastModified}</span>`

const hoje = new Date();
ano.innerHTML = `<span>${hoje.getFullYear()}</span>`;