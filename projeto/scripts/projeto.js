const ano = document.querySelector("#anoatual");
const ultima_modificacao = document.querySelector("#ultima-mdificacao");
ultima_modificacao.innerHTML = `<span>${document.lastModified}</span>`

const hoje = new Date();
const anoH = hoje.getFullYear();
const mesH = String(hoje.getMonth() + 1).padStart(2, "0"); // mês começa em 0
const diaH = String(hoje.getDate()).padStart(2, "0");      // dia do mês

ano.innerHTML = `<span>${anoH}</span>`;

const numPedido = document.querySelector("#numeroPedido"); // Numero a ser gerado após a finalização da encomenda

if (numPedido) {
    let numPedidos = Number(window.localStorage.getItem("numeroPedido"));
    let pedido = numPedidos + 1;

    let numeroGerado = `${anoH}${mesH}${diaH}${pedido}`;

    numPedido.textContent = numeroGerado;

    localStorage.setItem("numeroPedido", pedido);
}

// Array de produtos

const produtos = [
    {
        id: 0,
        nome: `Bolo de Frutas`,
        descricao: `Bolo com massa branca, recheio de maracujá e cobertura de frutas`,
        preco: 150.00
    },
    {
        id: 1,
        nome: `Bolo de Castanha`,
        descricao: `Bolo com massa branca, recheio de castanha e cobertura de caramelo e castahna.`,
        preco: 100.00
    },
    {
        id: 2,
        nome: `Torta de Chocolate`,
        descricao: `Torta de chocolate com coiro e raspas de cocolate.`,
        preco: 10.00
    },
    {
        id: 3,
        nome: `Torta de Limão`,
        descricao: `Torta de limão`,
        preco: 10.00
    },
    {
        id: 4,
        nome: `Torta de Chocolate e Maracujá`,
        descricao: `Torta de chocolate com cobertura de mousse de maracujá e raspas de chocolate.`,
        preco: 10.00
    },
    {
        id: 5,
        nome: `Torta de Morango`,
        descricao: `Torta de Morango com cobertura de geleia de morango, chantily e morango.`,
        preco: 10.00
    },
    {
        id: 6,
        nome: `Cupcake de Frutas Vermelhas`,
        descricao: `Cupcake de baunilha com cobertura de chantilly e frutas vermelhas.`,
        preco: 8.50
    },
    {
        id: 7,
        nome: `Cupcake de Chocolate`,
        descricao: `Cupcake de chocolate com cobertura de brigadeiro e chocolate.`,
        preco: 8.50
    },
    {
        id: 8,
        nome: `Cupcake de Morango`,
        descricao: `Cupcake com massa de chocolate, recheio de morango e cobertura de chantilly e granulado.`,
        preco: 8.50
    },
    {
        id: 9,
        nome: `Cupcake de Marshmallow`,
        descricao: `Cupcake de baunilha, recheio de creme de leite e cobertura de chantilly, granulados e marshmallow.`,
        preco: 8.50
    }
];

// Interação DOM - Seleção dos elementos
const formulario = document.querySelector(`#form-encomenda`);
const selectProduto = document.querySelector(`#produto`);
const quantidade = document.querySelector(`#quantidade`);
const descricaoProduto = document.querySelector(`#descricao-produto`);
const resumo = document.querySelector(`#resumo`);
const ultimaEncomenda = document.querySelector(`#ultima-encomenda`);
const botao_adicionar_doce = document.querySelector('#add_doce');
const lista = document.querySelector('#list');
// Preecher o select com os produtos do array
function preencherProdutos() {

    produtos.forEach((produto) => {
        const opcao = document.createElement("option");
        opcao.value = produto.id;
        opcao.textContent = produto.nome;
        selectProduto.appendChild(opcao);
    });
}

if (selectProduto) {
    preencherProdutos();
}

const tbody = document.querySelector(`tbody`); // pode ficar fora do forEach, não muda a cada iteração

function preencherTabelaPrecos() {

    produtos.forEach((produto) => {
        const trProd = document.createElement("tr");
        const tdProdND = document.createElement("td");

        const tdProdP = document.createElement("td");
        tdProdP.classList.add('preco');

        const spanNome = document.createElement("span");
        spanNome.classList.add('produto-nome');
        const spanDesc = document.createElement("span");
        spanDesc.classList.add('produto-desc');

        spanNome.textContent = produto.nome;
        spanDesc.textContent = produto.descricao;
        tdProdP.textContent = `R$ ${produto.preco.toFixed(2).replace(".", ",")}`;

        tdProdND.appendChild(spanNome);
        tdProdND.appendChild(spanDesc);

        trProd.appendChild(tdProdND);
        trProd.appendChild(tdProdP);

        tbody.appendChild(trProd);
    });
}

if (tbody) {
    preencherTabelaPrecos();
}

// Função de adicionar doce
botao_adicionar_doce.addEventListener('click', function () {
    const idProduto = selectProduto.value;
    if (idProduto != null) {
        const li = document.createElement('li');
        const botaoexcluir = document.createElement('button');

        const qtd = Number(quantidade.value);

        li.textContent = ` ${qtd}x ${produtos[idProduto].nome} -
            R$ ${(produtos[idProduto].preco * qtd).toFixed(2)} `;
        botaoexcluir.textContent = '❌';

        li.append(botaoexcluir);
        lista.append(li);
        botaoexcluir.addEventListener('click', function () {
            lista.removeChild(li);
            // input.focus();
        });
    }
});