const codigo_de_acesso = document.querySelector('#codigo-de-acesso');

const botao_consultar = document.querySelector('#botao-consultar');

const label_status = document.querySelector('#status');

const cartao_resposta = document.querySelector('#cartao-resposta');

const lista = [
    [1557459, 'a', 'sc', 1],
    [1550679, 'a', 'sc', 2],
    [1357370, 'b', 'sc', 1],
    [1106844, 'b', 'sc', 2],
    [1529077, 'c', 'sc', 1],
    [1565412, 'c', 'sc', 2],
];

const consultar = (codigo) => {
    for (i = 0; i < lista.length; i++) {
        if (lista[i][0] === codigo) return lista[i];
    }
    return null;
};

botao_consultar.addEventListener('click', () => {
    label_status.innerText = '';
    cartao_resposta.removeAttribute('src');
    codigo = parseInt(codigo_de_acesso.value);
    retorno = consultar(codigo);
    if (retorno !== null) {
        label_status.innerText = `Código: ${retorno[0]} - Tipo de Prova: ${retorno[1].toUpperCase()} - Sequencial: ${retorno[2].toUpperCase()}_${retorno[1].toUpperCase()}${retorno[3]}`;
        cartao_resposta.setAttribute('src', `img/${retorno[1]}/${retorno[2]}_${retorno[1]}${retorno[3]}.jpg`);
    } else {
        label_status.innerText = 'Verifique o código digitado!';
    }
});

codigo_de_acesso.addEventListener('click', () => {
    label_status.innerText = '';
    cartao_resposta.removeAttribute('src');
});

codigo_de_acesso.addEventListener('keypress',  (e) => {
    if(e.which == 13){
       botao_consultar.click();
    } else {
        codigo_de_acesso.click();
    }
});