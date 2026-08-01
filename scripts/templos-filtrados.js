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

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-11-19",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-02-12",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Adicione mais objetos de templos aqui...
    ,
    {
        nomeDoTemplo: "Belém Brasil",
        localizacao: "Pará, Brasil",
        consagracao: "2022-11-20",
        area: 28675,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
    },
    {
        nomeDoTemplo: "Brasília Brasil",
        localizacao: "Distrito Federal- DF, Brasil",
        consagracao: "2023-09-17",
        area: 25000,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    },
    {
        nomeDoTemplo: "Fortaleza Brasil",
        localizacao: "Ceará, Brasil",
        consagracao: "2019-06-02",
        area: 36000,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
    },
];


// document.querySelector('#all').addEventListener('click', () => {
//     criarCards(templos);

// })

// document.querySelector('#old').addEventListener('click', () => {
//     criarCards(templos.filter(temple => new Date(temple.consagracao) < new Date('1950-01-01')));
// })

// document.querySelector('#new').addEventListener('click', () => {
//     criarCards(templos.filter(temple => new Date(temple.consagracao) >= new Date('1950-01-01')));
// })

// document.querySelector('#large').addEventListener('click', () => {
//     criarCards(templos.filter(temple => temple.area >= 50000));
// })

// document.querySelector('#small').addEventListener('click', () => {
//     criarCards(templos.filter(temple => temple.area < 50000));
// })

function toogleActive(element) {
    element.classList.add("active");
}

const cutoffDate = new Date('1950-01-01');
const largeArea = 50000;

function setFilter(seletor, filterFunction) {
    const element = document.querySelector(seletor);

    element.addEventListener('click', () => {
        toogleActive(element)
        criarCards(templos.filter(filterFunction))
    });
}

setFilter('#all', () => templos);
setFilter('#old', templo => new Date(templo.consagracao) < cutoffDate);
setFilter('#new', templo => new Date(templo.consagracao) >= cutoffDate);
setFilter('#large', templo => templo.area >= largeArea);
setFilter('#small', templo => templo.area < largeArea);



// const cards = document.querySelector("#container-templos");
criarCards(templos);

function criarCards(templos) {

    document.querySelector(".container-templos").innerHTML = '';
    templos.forEach(temple => {
        // Cria os elementos html
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        // Preenche os dados com os valores do array de templos
        name.textContent = temple.nomeDoTemplo;
        location.innerHTML = `<span class="label">Localização:</span> ${temple.localizacao}`;
        dedicated.innerHTML = `<span class="label">Dedicado:</span> ${temple.consagracao}`;
        area.innerHTML = `<span class="label">Tamanho:</span> ${temple.area} sq ft`;

        // Configura a imagem
        img.setAttribute("src", temple.urlDaImagem);
        img.setAttribute("alt", `Templo ${temple.urlDaImagem}`);
        img.setAttribute("loading", "lazy");

        // Adiciona os elementos ao cartão
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container-templos").appendChild(card);
        // Adiciona o cartão ao documento
        // cards.appendChild(card);
    });
}
