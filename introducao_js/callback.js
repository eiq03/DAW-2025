const inicio = () => {
    console.log('inicio');
}

const fim = () =>{
    console.log('fim');
}

const processa = (start, final) => {
    start();
    final();
}

processa (inicio, fim);

processa (()=>{
    console.log('inicio 1')
}, ()=>{
    console.log('fim 1')
})