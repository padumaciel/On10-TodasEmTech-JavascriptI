function exibirDadosTabela(event){
    event.preventDefault();

    let tituloDoLivro = document.querySelector('#tituloDoLivro').value;
    let autorDoLivro = document.querySelector('#autorDoLivro').value;
    let isbnDoLivro = document.querySelector('#isbnDoLivro').value;
    let dataDePublicacaoDoLivro = document.querySelector('#dataDePublicacaoDoLivro').value;
    let qtdPaginasDoLivro = document.querySelector('#qtdPaginasDoLivro').value;
    let dataInsercaoLivro = new Date().toLocaleDateString('pt-br');
    let horarioInsercaoLivro = new Date().toLocaleTimeString('pt-br');
    

    if(tituloDoLivro==="" ||  autorDoLivro==="" ||  isbnDoLivro==="" || dataDePublicacaoDoLivro==="" || qtdPaginasDoLivro==="" || dataInsercaoLivro===""){
        alert("Atenção! Dados inseridos de forma incorreta!")
    }else{
        document.getElementById("corpoTabela").innerHTML += `
            <tr id="tr-tabela">
                <td>${tituloDoLivro}</td>
                <td>${autorDoLivro}</td>
                <td>${isbnDoLivro}</td>
                <td>${dataDePublicacaoDoLivro}</td>
                <td>${qtdPaginasDoLivro}</td>
                <td>${dataInsercaoLivro}</td>
                <td>${horarioInsercaoLivro}</td>
                <td><button id='botaoTabela' class='botao-tabela'></button></td> 
            </tr>
        `
        limparFormulario();
    };
}

const limparFormulario = ()=>{
    tituloDoLivro.value = ""
    autorDoLivro.value = ""
    isbnDoLivro.value = ""
    dataDePublicacaoDoLivro.value = ""
    dataInsercaoLivro = ""
    qtdPaginasDoLivro.value = ""
}

const corpoTabela = document.querySelector('#corpoTabela');

corpoTabela.addEventListener('click', (event)=>{
    if (event.target.className=="botao-tabela"){
        const botaoExcluirNovamente=event.target.parentElement
        botaoExcluirNovamente.parentElement.remove()
    }
})

// function removerLivroTabela(event){
//     document.getElementById("tr-tabela").remove();
// 

