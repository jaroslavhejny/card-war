function isDraw(){
    const maxCards = Math.min(3, player1, player2);
    
    for (let i = 0; i < maxCards; i++) {
        card1 = [...card1,  player1.shift()];
        card2 = [...card2, player2.shift()];
    }
}