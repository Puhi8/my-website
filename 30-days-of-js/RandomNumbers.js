///funkcije///
function NumberPrime(num){
    for (let i = 2; i < (num); i++){
        if(num % i === 0){return false}
        }
    {return true}
}
const NumberOdd = num => num % 2 === 0
const NumberEven = num => num % 2 === 1

//identify table
const table = document.getElementById("table")

//ustvari tabelo
for(let i=0; i<40;i++){
    let newTable = document.createElement("tr")
    
//ustvari vrstico
    for (let i=0; i<10;i++){
        let element = document.createElement("th")
        var number = Math.round((Math.random())*100)
        let text = document.createTextNode(number)
        element.appendChild(text)
        newTable.appendChild(element)
        NumberEven(number)
            ?element.style.backgroundColor = "#0f0"
            :element.style.backgroundColor = "#ff0"
        NumberPrime(number)
            ?element.style.backgroundColor = "#f00"
            :console.log()
    } 
    table.appendChild(newTable)
}