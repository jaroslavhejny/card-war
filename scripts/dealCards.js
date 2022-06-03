function dealCards(){
    let arr = [];
    const symbols = ["h", "s", "c", "d"];
    for (let i = 1; i < count+1; i++){
        for (let j = 0; j < 4; j++){
            const card = {
                value: i,
                symbol: symbols[j]
            }
            arr.push(card);
        }
    }
    const sorted = arr.sort((a, b) => Math.random() - Math.random());
    player1 = sorted.slice(0, arr.length/2);
    player2 = sorted.slice(arr.length/2, arr.length);
    printPlayers("deck1", player1);
    printPlayers("deck2", player2);
}