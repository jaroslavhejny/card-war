let player1 = [];
let player2 = [];
let interval;
let rounds = 0;
let count;
let speed;

function start(){
    rounds = 0;
    speed = parseInt(document.getElementById("speed").value);
    interval = setInterval(()=>{
        drawNext();
        rounds++;
        document.getElementById("rounds").innerHTML = rounds;
    }, speed);

    window.addEventListener("keypress", (e)=> {
        if (e.code === "KeyQ"){
            clearInterval(interval);
        }
    });
}