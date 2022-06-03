function printPlayers(player, cards){
    document.getElementById(player).innerHTML = JSON.stringify(cards);
}