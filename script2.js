function Classifica() {
    let idade = parseInt(document.getElementById("idade-jogador").value);
    let categoria;
    let res;
    if(idade >= 5 || idade <= 10) {
        categoria = 'infantil';
    }

    res = document.getElementById("res").innerHTML = `${categoria}`;

}
