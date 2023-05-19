function venda() {
    let valorVenda = document.getElementById("valor-venda").value;
    let tipoVenda = parseInt(document.getElementById("tipo-venda").value);
    let res;

    switch(tipoVenda) {
        case 1:
            //venda a vista
            valorVenda = valorVenda - valorVenda * 0.1;
            break;
        case 2:
            //venda a prazo 30 dias
            valorVenda = valorVenda - valorVenda * 0.05;
            break;
        case 3:
            //venda prazo 60 dias;
            valorVenda;
            break;
        case 4:
            //venda a prazo 90 dias
            valorVenda = valorVenda + valorVenda * 0.05;
            break;
        case 5:
            //venda com cartao de debito
            valorVenda = valorVenda - valorVenda * 0.08;
            break;
        case 6:
            //venda cartao de credito
            valorVenda = valorVenda - valorVenda * 0.07;
            break;
        default:
            alert('opcao invalida!');
            
    }

    res = document.getElementById("res").innerHTML = `valor final da venda ${valorVenda}`;

}