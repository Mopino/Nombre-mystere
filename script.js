var guess = document.getElementById ("number")
var RNG = 0
var modal = document.getElementById("modal")
var btnEZ = document.getElementById("btnEZ")
var btnMedium = document.getElementById("btnMedium")
var btnHard = document.getElementById("btnHard")
var msg = document.getElementById("msg")

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
    console.log("EZ");
    return Math.floor(Math.random() * (9));
}
function getRandomMedium (){
    console.log("Med");
    return Math.floor(Math.random() * (99));
}
function getRandomHard (){
    console.log("Hard");
    return Math.floor(Math.random() * (999));
}

function getRandom (lv){
    if (lv == 2){
        RNG = getRandomMedium ()
    }else if (lv == 3){
        RNG = getRandomHard ()
    }else {
        RNG = getRandomEZ ()
    }
    console.log(RNG)
    modal.style.display = "none"
}

function checkGuess (){
    console.log("Oui");
    if (guess.value == RNG){
        msg.innerText = "GG !"
    } else if (guess.value < RNG){
        msg.innerText = "C'est plus grand."
    } else if (guess.value > RNG){
        msg.innerText = "C'est plus petit."
    }
}

displayDifficulty()
