var player1, player2, vez = 1;
var vezes = 0, vencedor;
var clickedTimes = 0;

document.addEventListener("DOMContentLoaded", function () {
    perguntarPlayers();
    document.getElementById('div-vez').innerHTML = `
    <h2 id="vez-h2">
    <p id="vez-p">${player1}</p>, é sua vez!!
    </h2>
    `;
});

function perguntarPlayers() {
    player1 = prompt("Digite o nome do 1º jogador:  ");
    vezes++;
    if (player1 != null && player1 != "" && vezes <= 2) {
        player2 = prompt("Digite o nome do 2º jogador:  ");
        vezes++;
        if (player2 != null && player2 != "") {
            document.getElementById('playersH2-box').innerHTML = `
            <h2>X: ${player1}</h2>
            <h2>O: ${player2}</h2>
            `;
        } else {
            alert("Você precisa digitar um nome para os 2 jogadores!!");
            vezes = 0;
            perguntarPlayers();
        }
    } else {
        alert("Você precisa digitar um nome para os 2 jogadores!!");
        vezes = 0;
        perguntarPlayers();
    }
}

function Jogando(idClicked) {
    var vezp = document.getElementById('vez-p');
    var innerId = document.getElementById(idClicked);
    if (vez == 1) {
        innerId.innerHTML = `
        <p>X</p>
        `;
        vez = 2;
        vezp.innerHTML = player2;
    } else {
        vezp.innerHTML = player1;
        innerId.innerHTML = `
        <p>O</p>
        `;
        vez = 1;
    }
    innerId.onclick = "";
    clickedTimes++;
    VerificarVencedor();
}

function VerificarVencedor() {
    if(clickedTimes==9){
        document.getElementById("win-h2").innerHTML=`O jogo empatou:(`;
        document.getElementById("win").style.visibility = "visible";
    }
    if (Verificar3iguais(1, 2, 3) || Verificar3iguais(4, 5, 6) || Verificar3iguais(7, 8, 9) ||
        Verificar3iguais(1, 4, 7) || Verificar3iguais(2, 5, 8) || Verificar3iguais(3, 6, 9) ||
        Verificar3iguais(1, 5, 9) || Verificar3iguais(3, 5, 7)
    ) {
        setTimeout(() => { 
            var nome;
            if(vencedor==1){
                nome = player1;
            }else{
                nome = player2;
            }
            document.getElementById("win-h2").innerHTML=`${nome} venceu o jogo!`;
            document.getElementById("win").style.visibility = "visible";
        }, 60);
    }
}

function Verificar3iguais(c1, c2, c3) {
    var c1_content = (document.getElementById("casa" + c1)).getElementsByTagName("p");
    c1_content = c1_content[0]
    if(c1_content!=null){
        c1_content = c1_content.innerHTML;
    }
    var c2_content = (document.getElementById("casa" + c2)).getElementsByTagName("p");
    c2_content = c2_content[0];
    if(c2_content!=null){
        c2_content = c2_content.innerHTML;
    }
    var c3_content = (document.getElementById("casa" + c3)).getElementsByTagName("p");
    c3_content = c3_content[0];

    if(c3_content!=null){
        c3_content = c3_content.innerHTML;
    }

    if ((c1_content == c2_content) && (c2_content == c3_content)) {
        if (c1_content == 'X') {
            vencedor = 1;
        } else {
            if (c1_content == 'O') {
                vencedor = 2;
            }else{
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function reloadPage(){
    document.location.reload(true);
}