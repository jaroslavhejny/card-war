function printNext(player, cards) {
    if (cards[0]){
        const element = document.getElementById(player)
        element.removeAttribute("class");
        element.classList.add(`card`);
        element.classList.add(`${cards[0].symbol}`);
        element.classList.add(`${cards[0].high}`);
    }
}