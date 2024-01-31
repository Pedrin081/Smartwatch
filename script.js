const imagemselecionada = document.getElementById('imagem-visualizacao');

const VerdeCipreste = {
    nome: 'Verde-Cipreste',
    pasta: 'imagens-verde-cipreste'
}

const AzulInverno = {   
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno'
}

const meianoite = { 
    nome: 'meia-noite',
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}

const rosaclaro = {
    nome: 'Rosa-claro',
    pasta: 'imagens-rosa-claro'
}

const opcoesCores = [VerdeCipreste, AzulInverno, meianoite, estelar, rosaclaro ]

let imagemselecionada = 1;

function trocarimagem () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemselecionada = idOpcaoSelecionada.charAt(0);
    imagemselecionada.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + imagemselecionada +  ".jpeg";
}