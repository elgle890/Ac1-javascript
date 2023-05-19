function calcular() {
    let salario = parseFloat(document.getElementById('salario').value);
    let categoria = document.getElementById("categoria").value;
    if(categoria == 'A' || categoria == 'C' || categoria == 'F' || categoria == 'H') {
        salario = salario + salario * 0.10;
    } else if(categoria == 'B' || categoria == 'D' || categoria == 'E' || categoria == 'I' || categoria == 'J' || categoria == 'T') {
        salario = salario + salario * 0.15;
    } else {
        salario = 'categoria invalida reinicie a pagina.';
    }
    
    document.getElementById('res').innerHTML = `seu salario: ${salario}`;
}   
    