const imagemvisualizacao = document.getElementById('imagem-visualizacao');
const tituloproduto = docuemnt.getElementById('titulo-produto');

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
const opcoestamanho = ['41mm', '45mm'];

let imagemselecionada = 1;
let tamanhoselecionado = 1;

function trocarimagem () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemselecionada = idOpcaoSelecionada.charAt(0);
    imagemvisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + imagemselecionada +  ".jpeg";
}

function trocartamanho () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoselecionado = idOpcaoSelecionada.charAt(0);
    tituloproduto.innertext = "Pulseira loop esportiva azul-inverno para caixa de" + opcoestamanho[tamanhoselecionado];

}