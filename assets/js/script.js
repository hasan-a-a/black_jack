let playEl = document.getElementById("play")
let cardEl = document.getElementById("card")
let sumEl = document.getElementById("sum")
let startEl = document.getElementById("start")
let newEl = document.getElementById("new")
let nameEl = document.getElementById("name")
document.title = ("BlackJack")
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13]
startEl.addEventListener("click",function(){
    let card01 = Math.floor( Math.random(cards)*cards.length)
    let card02 = Math.floor( Math.random(cards)*cards.length)
    cardEl.innerHTML = `Card: ${cards[card01]} ${cards[card02]}`
    
    

})