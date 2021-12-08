var contPessoa = 0;
var contComputador = 0;
function alterarPlacar(jogador) {
    console.log(jogador);
    if (jogador === "computador") {
        ++contComputador;
        document.getElementById("pComputador").innerHTML = contComputador;


    } else {
        ++contPessoa;
        document.getElementById("pPessoa").innerHTML = contPessoa;

    }

}
function escolhaJokenpo() {

    let EscolhasJokepon = Math.round(Math.random() * 2);
    console.log(EscolhasJokepon);
    document.querySelector(".imagemComputador").removeAttribute("disabled");

    switch (EscolhasJokepon) {
        case 0:
            document.querySelector("#computador").setAttribute("src","pedra.png");
            return "pedra";
        case 1:
        document.querySelector("#computador").setAttribute("src","tesoura.jpeg");
            return "tesoura";

        case 2:
        document.querySelector("#computador").setAttribute("src","papel.jpeg");
            return "papel";

    }

}
function analisarVencedor(escolhaComputador, escolhaPessoa) {
    console.log(escolhaComputador);
    console.log(escolhaPessoa);

    if (escolhaComputador === escolhaPessoa) {
        //document.getElementById("").innerHTML = " Empate ";


    } else if ((escolhaComputador === "pedra" && escolhaPessoa === "tesoura") ||
        (escolhaComputador === "tesoura" && escolhaPessoa === "papel") ||
        (escolhaComputador === "papel" && escolhaPessoa === "pedra")
    ) {
        //document.getElementById("").innerHTML = " Computador Venceu !!!";
        alterarPlacar("computador");
    } else {
        //document.getElementById("").innerHTML = " Pessoa venceu !!!";
        alterarPlacar("pessoa");
    }

}

document.getElementById("pedra").addEventListener("click", (e) => {
    let escolhaComputador = escolhaJokenpo();
    setTimeout(() => {
        analisarVencedor(escolhaComputador, document.getElementById("pedra").getAttribute("id"));
    }, 90);
});
document.getElementById("papel").addEventListener("click", (e) => {
    let escolhaComputador = escolhaJokenpo();
    setTimeout(() => {
        analisarVencedor(escolhaComputador, document.getElementById("papel").getAttribute("id"));

    }, 90);


});
document.getElementById("tesoura").addEventListener("click", (e) => {
    let escolhaComputador = escolhaJokenpo();
    setTimeout(() => {
        analisarVencedor(escolhaComputador, document.getElementById("tesoura").getAttribute("id"));
    }, 90);
});