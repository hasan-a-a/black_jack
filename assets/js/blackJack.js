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
let sum = 0
document.title = "BlackJack"
// const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13]
nameEl.innerHTML = `HASSAN:$${balance}`;
log_outEl.addEventListener("click", function(){
    window.location.replace("login.html")
  })
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13)+1
    return randomNumber
}
startEl.addEventListener("click",function(){
    if(isAlive == false){
        isAlive = true
        let card01 = getRandomCard()
        let card02 = getRandomCard()
        cardEl.innerHTML = `Card: ${card01} ${card02}`;
        playEl.innerHTML = `pick another card?`;
        sum = card01 + card02
        sumEl.innerHTML = `Sum: ${sum}`;
        balance -= ammount;
        nameEl.innerHTML = `HASSAN: ${balance}`;
        if (sum < 21) {
            playEl.innerHTML = `pick onother card`;
        } else if (sum == 21) {
            playEl.innerHTML = `YOU ARE A WINNER`;
        } else {
            playEl.innerHTML = `YOU ARE A LOOSER`;
        }
      }
    })
    newEl.addEventListener("click",function(){
        if(isAlive == true && balance >= 50 && sum < 21){
            let newCard = getRandomCard()
            sum += newCard
            cardEl.innerHTML += ` ${newCard}`;
            sumEl.innerHTML = `Sum: ${sum}`;
            balance -= ammount;
            nameEl.innerHTML = `HASSAN: ${balance}`;
            if(sum < 21){
                playEl.innerHTML = `pick onother card`
            }else if(sum == 21){
                playEl.innerHTML = `YOU ARE A WINNER`
            }else{
                playEl.innerHTML = `YOU ARE A LOOSER`
            }
        }
    })
resetEl.addEventListener("click",function(){
    if(sum >= 21 || balance == 0 || isAlive == false){
        location.reload();
        playEl.innerHTML = `Want to play a round?`
        cardEl.innerHTML = `Card:`
        sumEl.innerHTML = `Sum:`
        nameEl.innerHTML = `HASSAN:$${balance}`
    }
})

