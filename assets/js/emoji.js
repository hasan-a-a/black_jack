const fighters = [
    "🐉",
    "🐥",
    "🐊",
    "💩",
    "🦍",
    "🐢",
    "🐩",
    "🦭",
    "🦀",
    "🐝",
    "🤖",
    "🐘",
    "🐸",
    "🕷",
    "🐆",
    "🦕",
    "🦁",
  ]
//   const fighters = [1,2,3,4,5,6,]

  let stageEl = document.getElementById("stage")
  let fightButtonEl = document.getElementById("fightButton")
  let logOutBtn = document.getElementById("logout")
  document.title=("Emoji")
  logOutBtn.addEventListener("click", function(){
    window.location.replace("login.html")
  })
  fightButtonEl.addEventListener("click",function(){
    
    let char01 = Math.floor( Math.random(fighters)*fighters.length)
    let char02 = Math.floor( Math.random(fighters)*fighters.length)
    let diff = 0
    fightButtonEl.style.backgroundColor="#fff"
    // stageEl.textContent = fighters[char01] + "vs" + fighters[char02]
    stageEl.innerHTML = `${fighters[char01]} vs ${fighters[char02]}`
    if(fighters[3] == fighters[char01] || fighters[3] == fighters[char02]){
      stageEl.innerHTML += `<br> ${fighters[3]} Is The Winner`
    }else{
      if(char01 > char02){
        diff = char01 -  char02
        stageEl.innerHTML += `<br> ${fighters[char01]} win by ${diff } points`
        if(diff>9){
          fightButtonEl.style.backgroundColor="#0f5"
        }
      }else if(char01 < char02){
        diff = char02 -  char01
        stageEl.innerHTML += `<br> ${fighters[char02]} win by ${diff } points`
        if(diff>9){
          fightButtonEl.style.backgroundColor="red"
        }
      }else {
        stageEl.innerHTML += `<br> TIE GAME`
        fightButtonEl.style.backgroundColor="#f0f"
      }
    }
  })