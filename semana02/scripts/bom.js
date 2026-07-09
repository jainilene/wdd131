const input = document.querySelector('#favchap');
const botao = document.querySelector('button');
const lista = document.querySelector('#list');
const botao_adicionar = document.querySelector('#add_cap');



botao_adicionar.addEventListener('click', function () {
    if (input.value.trim() != '') {
        const li = document.createElement('li');
        const botaoexcluir = document.createElement('button');

        li.textContent = input.value;
        botaoexcluir.textContent = '❌';

        li.append(botaoexcluir);
        lista.append(li);
        botaoexcluir.addEventListener('click', function () {
            lista.removeChild(li);
            input.focus();
        });
    }
});

input.value = ''
input.focus();


