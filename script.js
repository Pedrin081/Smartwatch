const imagemvisualizacao = document.getElementById('imagem-visualizacao');
const tituloproduto = document.getElementById('titulo-produto');
const nomecor = document.getElementById('nome-cor-selecionada');
const miniaturaimagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaimagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaimagem2 = document.getElementById('2-imagem-miniatura');

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
const opcoestamanho = ['41mm','45mm'];

let imagemselecionada = 1;
let tamanhoselecionado = 1;
let corselecionada = 1;


function trocarimagem () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemselecionada = idOpcaoSelecionada.charAt(0);
    imagemvisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-" + imagemselecionada +  ".jpeg";
    imagemvisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corselecionada].pasta + '/imagem-' +imagemselecionada + '.jpeg'
}

function trocartamanho () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoselecionado = idOpcaoSelecionada.charAt(0);
    tituloproduto.innerText = "Pulseira loop esportiva " + opcoesCores[corselecionada].nome + "para caixa de" + opcoestamanho[tamanhoselecionado];
    if(opcoestamanho[tamanhoselecionado] === '41mm'){
        imagemvisualizacao.classList.add('caixa-pequena');
    }else{
        imagemvisualizacao.classList.remove('caixa-pequena');
    }
   
}

function trocarcor (){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corselecionada = idOpcaoSelecionada.charAt(0);
    tituloproduto.innerText = "Pulseira loop esportiva " + opcoesCores[corselecionada].nome + "para caixa de" + opcoestamanho[tamanhoselecionado];
    nomecor.innerText = "Cor - " + opcoesCores[corselecionada].nome;
    miniaturaimagem0.src = './imagens/opcoes-cores/' + opcoesCores[corselecionada].pasta + '/imagem-0.jpeg';
    miniaturaimagem1.src = './imagens/opcoes-cores/' + opcoesCores[corselecionada].pasta + '/imagem-1.jpeg';
    miniaturaimagem2.src = './imagens/opcoes-cores/' + opcoesCores[corselecionada].pasta + '/imagem-2.jpeg';
    imagemvisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corselecionada].pasta + '/imagem-' +imagemselecionada + '.jpeg'
}

