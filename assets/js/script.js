let playEl = document.getElementById("play")
let cardEl = document.getElementById("card")
let sumEl = document.getElementById("sum")
let startEl = document.getElementById("start")
let newEl = document.getElementById("new")
let resetEl = document.getElementById("reset")
let nameEl = document.getElementById("name")
let log_outEl = document.getElementById("log_out")
let balance = 200;
let ammount = 50;
let isAlive = false
document.title = ("BlackJack")
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13]
nameEl.innerHTML = `HASSAN:$200`
log_outEl.addEventListener("click", function(){
    window.location.replace("login.html")
  })
startEl.addEventListener("click",function(){
    let card01 = Math.floor( Math.random(cards)*cards.length)
    let card02 = Math.floor( Math.random(cards)*cards.length)
    cardEl.innerHTML = `Card: ${cards[card01]} ${cards[card02]}`
    playEl.innerHTML = `pick another card?`
    let sum = cards[card01] + cards[card02]
    sumEl.innerHTML = `Sum: ${sum}`
    let balance = 200
    let ammount = 50
    balance -= ammount
    nameEl.innerHTML = `HASSAN: ${balance}`
    if(sum < 21){
        playEl.innerHTML = `pick onother card`
    }else if(sum == 21){
        playEl.innerHTML = `YOU ARE A WINNER`
    }
    else{
        playEl.innerHTML = `YOU ARE A LOOSER`
    }

    newEl.addEventListener("click",function(){
        for(let i in cards){
            cardEl.innerHTML = `Card: ${cards[card01]} ${cards[card02]} ${cards[i]}`
            let sum = cards[card01] + cards[card02] + cards[i]
            sumEl.innerHTML = `Sum: ${sum}`
            let balance2 = balance
            let ammount = 50
            balance2 -= ammount
            nameEl.innerHTML = `HASSAN: ${balance2}`
            
            if(sum < 21){
                playEl.innerHTML = `pick onother card`
            }else if(sum == 21){
                playEl.innerHTML = `YOU ARE A WINNER`
            }
            else{
                playEl.innerHTML = `YOU ARE A LOOSER`
            }
        }
    })
})
resetEl.addEventListener("click",function(){
    playEl.innerHTML = `Want to play a round?`
    cardEl.innerHTML = `Card:`
    sumEl.innerHTML = `Sum:`
    nameEl.innerHTML = `HASSAN:$200`
})

