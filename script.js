var guess = document.getElementById ("number")
var modal = document.getElementById("modal")
var endgame = document.getElementById("endgame")
var btnEZ = document.getElementById("btnEZ")
var btnMedium = document.getElementById("btnMedium")
var btnHard = document.getElementById("btnHard")
var msg = document.getElementById("msg")
var GG = document.getElementById("GG")
var x = null
var RNG = 0

function displayDifficulty() {
    modal.style.display = "block"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
    } else if (event.target == endgame) {
        endgame.style.display = "none"
    }
} 

function getRandom (x){
    console.log("OK");
    return Math.floor(Math.random () * (x))
}

function lv (lv){
    RNG = getRandom (x)
    if (lv == 2){
        x = 99
    }else if (lv == 3){
        x = 999
    }else {
        x = 9
    }
    console.log(RNG)
    modal.style.display = "none"
}

function checkGuess (){
    console.log("Oui");
    if (guess.value == RNG){
        endgame.style.display = "block"
        GG.innerText = "GG !"
    } else if (guess.value < RNG){
        msg.innerText = "C'est plus grand."
    } else if (guess.value > RNG){
        msg.innerText = "C'est plus petit."
    }
}

displayDifficulty()