document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("start").addEventListener("click", ()=>{
        start();
    });
    document.getElementById("stop").addEventListener("click", ()=>{
        clearInterval(interval);
    });
    document.getElementById("deal").addEventListener("click", ()=>{
        newDeal();
    });
});

window.addEventListener("keypress", (e)=> {
    if (e.code === "Enter" || e.code === "Space"){
        start();
    }
});