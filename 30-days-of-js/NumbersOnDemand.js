///funkcije///
function NumberPrime(num){
    for (let i = 2; i < (num); i++){
        if(num % i === 0){return false}
        }
    {return true}
}
const NumberOdd = num => num % 2 === 0
const NumberEven = num => num % 2 === 1

//remove table elements
let DidRun = false
let numberOfRows = 0
function removeTableContent(){
    if (DidRun){
        for (let i=0; i<numberOfRows;i++){
            let removeRow = document.querySelector("tr")
            removeRow.remove()
        }
        numberOfRows=0
    }  
}

function writeNumbers(){
removeTableContent()
//get data
    let InputNumber = document.getElementById("input").value
    const table = document.getElementById("table")
    var CNumber = 0
    DidRun = true

//write numbers
    for(let i=0; CNumber<InputNumber;i++){
        let newTable = document.createElement("tr")
        for (let i=0; i<10;i++){
            let element = document.createElement("th")
            let text = document.createTextNode(CNumber)
            NumberEven(CNumber)
                ?element.style.backgroundColor = "#0f0"
                :element.style.backgroundColor = "#ff0"
            NumberPrime(CNumber)
                ?element.style.backgroundColor = "#f00"
                :console.log()
            element.appendChild(text)
            element.id = "delMe"
            newTable.appendChild(element)
            CNumber++
            if (CNumber > InputNumber){
                break
            }
        } 
        numberOfRows++
        table.appendChild(newTable)
    }
}