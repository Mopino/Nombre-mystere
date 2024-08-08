var guess = document.getElementById ("number")
var RNG = 0
var modal = document.getElementById("modal")
var btnEZ = document.getElementById("btnEZ")
var btnMedium = document.getElementById("btnMedium")
var btnHard = document.getElementById("btnHard")
var msgPlus = document.getElementById("msgPlus")
var msgMoins = document.getElementById("msgMoins")
var msgEgal = document.getElementById("msgEgal")

function displayDifficulty() {
    modal.style.display = "block"
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"
        init()
    }
} 

function getRandomEZ (){
    return Math.floor(Math.random() * (9));
}
function getRandomMedium (){
    return Math.floor(Math.random() * (99));
}
function getRandomHard (){
    return Math.floor(Math.random() * (999));
}

function getRandom (){
    if (btnEZ){
        RNG = getRandomEZ ()
    } else if (btnMedium){
        RNG = getRandomMedium ()
    }else if (btnHard){
        RNG = getRandomHard ()
    }
    modal.style.display = "none"
}

function init (){
    RNG = getRandom()
}

function checkGuess (){
    if (guess.value == RNG){
        msgPlus.style.display = "flex"
    } else if (guess.value < RNG){
        msgMoins.style.display = "flex"
    } else if (guess.value > RNG){
        msgEgal.style.display = "flex"
    }
}

console.log(RNG)
displayDifficulty()
// init()
