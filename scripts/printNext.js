function printNext(player, cards) {
    console.log(cards);
    document.getElementById(player).innerHTML = JSON.stringify(cards[0].value);
}