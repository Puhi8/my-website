let Data = []
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

function ExportDataToStorage(){
    let DataJSON = JSON.stringify(Data)
    localStorage.setItem("Data", DataJSON) 
}
function GetDataFromStorage(){
    let DataFromStorage = localStorage.getItem("Data")
    Data = JSON.parse(DataFromStorage)
}
function ClearStorage(){
    let empty = []
    let DataJSON = JSON.stringify(empty)
    localStorage.setItem("Data", DataJSON) 
    NumberItems()
}

function NumberItems(){
    GetDataFromStorage()    
    try{
        let length = Data.length
        for(let i=0; i<length;i++){
            let PutInArray
            let score1 = Data[i].Score
            for(let j=0; j<length;j++){
                let score2 = Data[j].Score
                if(score1 > score2){
                    Data.splice(j,0,Data[i])
                    PutInArray = true
                    break
                }
            }
            if(PutInArray){
            Data.splice((i+1),1) 
            }
        }
    }
    catch(err){console.log(err)}
    ExportDataToStorage()
    
    let Div = document.getElementById("ListOfScores")
    Div.innerHTML = ""
    if(!Data){return}
    for(let i=0;i<Data.length;i++){
        let FirstName = Data[i].FirstName
        let LastName = Data[i].LastName
        let Score = Data[i].Score
        let Time = Data[i].Time

//get data
        let Table = document.createElement("table")
        let TRow = document.createElement("tr")
        let TFirstName = document.createElement("td")
        let TLastName = document.createElement("td")
        let TScore = document.createElement("td")
        let TTime = document.createElement("p")
        TFirstName.textContent = FirstName
        TLastName.textContent = LastName
        TScore.textContent = Score
        TTime.textContent = Time
        TFirstName.classList.add("ScoreData")
        TLastName.classList.add("ScoreData")
        TScore.classList.add("ScoreData")
        TTime.classList.add("TimeP")
        TFirstName.appendChild(TTime)
        TRow.appendChild(TFirstName) 
        TRow.appendChild(TLastName)
        TRow.appendChild(TScore)

//create battens
        let DelButton = document.createElement("button")
        let MinButton = document.createElement("button")
        let MaxButton = document.createElement("button")
        let DelImg = document.createElement("img")
        let MinImg = document.createElement("img")
        let MaxImg = document.createElement("img")
        DelImg.src = "./Score-icon/trash-red.png";
        MinImg.src = "./Score-icon/Minus-red.png";
        MaxImg.src = "./Score-icon/plus-green.png";
        DelButton.appendChild(DelImg)
        MinButton.appendChild(MinImg)
        MaxButton.appendChild(MaxImg)
        DelButton.classList.add("OperateButton")
        MinButton.classList.add("OperateButton")
        MaxButton.classList.add("OperateButton")
        DelButton.classList.add("push")
        DelButton.onclick = function(){DelateItem(String(i));}
        MinButton.onclick = function(){Subtract5(String(i));}
        MaxButton.onclick = function(){Add5(String(i));}
        TRow.appendChild(DelButton)
        TRow.appendChild(MinButton)
        TRow.appendChild(MaxButton)

//final export
        Table.appendChild(TRow)
        Table.classList.add(`Item`)
        Table.classList.add(i)
        Div.appendChild(Table)
    }
}
function AddItem(){
    GetDataFromStorage()
    if (!Data) {
        Data = [];
    }
    let FirstName = document.getElementById("FirstName").value
    let LastName = document.getElementById("LastName").value
    let Score = Number(document.getElementById("Score").value)
    let FirstNameIsEmpty = false
    let LastNameIsEmpty = false
    let ScoreIsEmpty = false
    if(FirstName == ""){FirstNameIsEmpty = true}
    if(LastName == ""){LastNameIsEmpty = true}
    if(Score == ""){ScoreIsEmpty = true}
    if(FirstNameIsEmpty || LastNameIsEmpty || ScoreIsEmpty){
        document.getElementById("warning").textContent = "You need to fill in all the data"
        return
    }
    document.getElementById("warning").textContent = ""
//time
    const Time = new Date()
    let Day = Time.getDate()
    let Month = months[Time.getMonth()]
    let Year = Time.getFullYear()
    let hours = Time.getHours()
    let minutes = Time.getMinutes()
    if(hours < 10){hours = `0${hours}`}
    if(minutes < 10){minutes = `${minutes}0`}
    let TimeText = `${Day}. ${Month}. ${Year}, ${hours}:${minutes}`
//create an object 
    FirstName = FirstName.toUpperCase()
    LastName = LastName.toUpperCase()
    Data.push({
        "FirstName":FirstName,
        "LastName":LastName,
        "Score":Score,
        "Time":TimeText
    })
    ExportDataToStorage()
//clear
    document.getElementById("FirstName").value = ""
    document.getElementById("LastName").value = ""
    document.getElementById('Score').value = ""
    NumberItems()
}

function DelateItem(NumberInArray){
    let DoIt = confirm("DELETE?")
    if(DoIt){
        GetDataFromStorage()
        Data.splice(NumberInArray,1)
        ExportDataToStorage()
        NumberItems()
    }
}
function Add5(NumberInArray){
    let ScoreMultiply = Number(document.getElementById("ScoreMultiply").value)
    if(ScoreMultiply == 0){ScoreMultiply = 1}
    //console.log(NumberInArray)
    GetDataFromStorage()
    Data[NumberInArray].Score += ScoreMultiply
    ExportDataToStorage()
    NumberItems()
}
function Subtract5(NumberInArray){
    let ScoreMultiply = Number(document.getElementById("ScoreMultiply").value)
    if(ScoreMultiply == 0){ScoreMultiply = 1}
    //console.log(NumberInArray)
    GetDataFromStorage()
    Data[NumberInArray].Score -= ScoreMultiply
    ExportDataToStorage()
    NumberItems()
}
NumberItems()
