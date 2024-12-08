const maindisplay = document.getElementById("display")

document.getElementById("btn0").addEventListener("click",function(){
    maindisplay.value += "0"
})

document.getElementById("btn1").addEventListener("click",function(){
    maindisplay.value += "1"
})

document.getElementById("btn2").addEventListener("click",function(){
    maindisplay.value += "2"
})

document.getElementById("btn3").addEventListener("click",function(){
    maindisplay.value += "3"
})

document.getElementById("btn4").addEventListener("click",function(){
    maindisplay.value += "4"
})

document.getElementById("btn5").addEventListener("click",function(){
    maindisplay.value += "5"
})

document.getElementById("btn6").addEventListener("click",function(){
    maindisplay.value += "6"
})

document.getElementById("btn7").addEventListener("click",function(){
    maindisplay.value += "7"
})

document.getElementById("btn8").addEventListener("click",function(){
    maindisplay.value += "8"
})

document.getElementById("btn9").addEventListener("click",function(){
    maindisplay.value += "9"
})

document.getElementById("btnPlus").addEventListener("click",function(){
    maindisplay.value += "+"
})

document.getElementById("btnMinus").addEventListener("click",function(){
    maindisplay.value += "-"
})

document.getElementById("btnMultiply").addEventListener("click",function(){
    maindisplay.value += "*"
})

document.getElementById("btnClear").addEventListener("click",function(){
    maindisplay.value = ""
})
document.getElementById("btnEqual").addEventListener("click",function(){
    try{
        maindisplay.value = eval(maindisplay.value);
    }catch(error){
        maindisplay.value = "Error"
    }
})

document.getElementById("btnDivide").addEventListener("click",function(){
    maindisplay.value += "/"
})