const numbers = document.getElementsByClassName('.key')

let display = document.getElementById('display')

const operators = document.getElementsByClassName('.key-operator')
console.log(operators)

document.getElementById('num1').addEventListener('click',()=>{
    display.value = "1"
})