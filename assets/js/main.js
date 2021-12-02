let vier = document.getElementById("vier")
let funf = document.getElementById("funf")
let sechs = document.getElementById("sechs")
let custom = document.getElementById("custom")
let inputNumber = document.getElementById("inputNumber")
let button = document.getElementById("button")
let tries = document.getElementById("tries")

// Enemy - Counter
let count = 0
let enemy = Math.floor(Math.random()*100)
// ---------------

// Custom 
let customText = document.createElement("input")
customText.type = "number"
customText.min = 0
customText.max = 10

custom.addEventListener("change", e => {
    tries.appendChild(customText)
    console.log("Hello")
})

// MathGame Function
mathGame1 = () => {
    let li = document.createElement("li")
    li.innerText = "nope"
    let liWin = document.createElement("li")
    liWin.innerText = "win"
    count += 1
    if(vier.checked == true){
        tries.innerHTML = count + "/4"
        if(inputNumber.value != enemy){
            document.body.childNodes[1].childNodes[3].append(li)
        }   else if(inputNumber.value == enemy){
            document.body.childNodes[1].childNodes[3].append(liWin)
        }   if(Number(count) == 5){
            document.write("YOU LOSE")
        }
    }
    if(funf.checked == true){
        tries.innerHTML = count + "/5"
        if(inputNumber.value != enemy){
            document.body.childNodes[1].childNodes[3].append(li)
        }   else if(inputNumber.value == enemy){
            document.body.childNodes[1].childNodes[3].append(liWin)
        }   if(Number(count) == 6){
            document.write("YOU LOSE")
        }
    }
    if(sechs.checked == true){
        tries.innerHTML = count + "/6"
        if(inputNumber.value != enemy){
            document.body.childNodes[1].childNodes[3].append(li)
        }   else if(inputNumber.value == enemy){
            document.body.childNodes[1].childNodes[3].append(liWin)
        }   if(Number(count) == 7){
            document.write("YOU LOSE")
        }
    }
    if(custom.checked == true){
        tries.innerHTML = count + "/" + customText.value
        if(inputNumber.value != enemy){
            document.body.childNodes[1].childNodes[3].append(li)
        }   else if(inputNumber.value == enemy){
            document.body.childNodes[1].childNodes[3].append(liWin)
        }   if(Number(count) == customText.value){
            document.write("YOU LOSE")
        }
    }
}