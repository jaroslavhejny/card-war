let card1 = [];
let card2 = [];
function drawNext(){
    printNext("chosen-p1", player1);
    printNext("chosen-p2", player2);
    card1 = [...card1,  player1.shift()];
    card2 = [...card2, player2.shift()];
    const lastCard1 = card1.length - 1;
    const lastCard2 = card2.length - 1;
    if (card1[lastCard1].value > card2[lastCard2].value){
        player1 = [...player1, ...card1, ...card2];
    }
    else if (card1[lastCard1].value < card2[lastCard2].value) {
        player2 = [...player2, ...card1, ...card2];

    }
    else {
        isDraw();
        drawNext();
    }
    if (player1.length < 1){
        clearInterval(interval);
        alert("player 2 wins")
    }
    if (player2.length < 1){
        clearInterval(interval);
        alert("player 1 wins")
    }
    printPlayers("deck1", player1);
    printPlayers("deck2", player2);
    card1 = [];
    card2 = [];
}