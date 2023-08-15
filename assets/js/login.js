const accounts = [["admin01","123"],["admin02","234"],["admin03","345"]]
const loginBtn = document.getElementById ("login")
const usrnameEl = document.getElementById ("username")
const passwordEl = document.getElementById ("password")
document.title = "login Page"
let counter = 1

loginBtn.addEventListener("click", function(){
    let accessuser = usrnameEl.value
    let accesspass = passwordEl.value
    let found = false
    // console.log(accessuser,accesspass)
    if(counter < 4){
        for(let i in accounts){
            if (accessuser == accounts[i][0] && accesspass == accounts[i][1]){
            //    alert(`Welcome ${accessuser}`)
               found = true
               counter = 1
               document.write(`<h1 style="text-align:center;color:blue;margin-top:50px;">welcome
                <span style="font-weight:bold; color:red;"> ${accessuser.toUpperCase()} </h1>`)
               setTimeout(secondPage,2000);
            }
    
        }if (found == false){
            counter++
            alert(`Invalid Username or Password
             you still have ${4-counter}`)

        } 
    }else{
            alert("Maximum Attempts Exceeded!")
        }
    

    
})
function secondPage(){
    window.location.replace("login.html")
}