let player1 = 20;
function adcionarVidaJogador1() {
    player1 = player1 + 1
    let text = document.getElementById("score1")
    text.innerHTML = player1
}
function tirarVidaJogador1() {
    player1 = player1 - 1
    let text = document.getElementById("score1")
    text.innerHTML = player1
}

let player2 = 20;
function adcionarVidaJogador2(){
    player2 = player2 +1
    let text = document.getElementById("score2")
    text.innerHTML = player2
}
function tirarVidaJogador2(){
    player2 = player2 -1
    let text = document. getElementById("score2")
    text.innerHTML=player2
}