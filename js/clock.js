let userName = prompt("Adınız Nedir?")

function showTime(){


let myName =document.querySelector("#myName")

myName.innerHTML = userName 

let myClock = document.querySelector("#myClock")
var date =new Date()

var days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

myClock.innerHTML = `
${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getDay()]} 
`
}
setInterval(showTime,1000)