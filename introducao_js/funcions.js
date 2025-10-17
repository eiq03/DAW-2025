//função sem retorno
function inicio () {
    const mensagem = 'Estou Iniciando...';
    console.log(mensagem);
}
//função com retorno
function processo () {
    const mensagem = 'Estou Processando...';
    return mensagem;    
}
inicio();
console.log(processo());
