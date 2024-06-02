///game info
let grid = [
   [false, false, false],
   [false, false, false],
   [false, false, false]
]


let getTableDataPlace = ((row,colum)=>{return (row*3+colum)})
let allButtonsInTable = document.getElementsByClassName("gameDiv")[0].children

let gameWasFinished = false
let winner
let winHistory = []

const winDisplayImgMap = new Map([
   ["cross", "../img/cross-red.png"],
   ["circle", "../img/circle-red.png"],
   [false, "../img/Empty.png"]
])
///player info
const playerMap = new Map([
   [true,"cross"],
   [false,"circle"]
])
const playerImageMap = new Map([
   [true,"../img/cross-red.png"],
   [false,"../img/circle-red.png"]
])
let player = true


function startNewGame(){
   //clear grid
   grid = [
      [false, false, false],
      [false, false, false],
      [false, false, false]
   ]
   //clear images displayed
   for(let i=0;i<9;i++){
      let button = allButtonsInTable[i] 
      button.firstChild.src = "../img/Empty.png"
      button.classList.remove("noBackgroundTransition")
   }
   gameWasFinished = false
   let popUp = document.getElementById("winPopUpBlur")
   popUp.style.display = "none"
}

function takeSpot(row, colum){
   //check if the spot is taken
   if(!!grid[row][colum]){
      console.warn("This spot is taken")  //!--------------------------------------------
      return
   }
   if(gameWasFinished){
      return
   }
   grid[row][colum] = playerMap.get(player) //log to the grid
   let button = allButtonsInTable[getTableDataPlace(row,colum)]
   button.firstChild.src = playerImageMap.get(player)//display an image
   button.classList.add("noBackgroundTransition")//no background-color change
   
   player = !player
   checkForWin()
}


function popUpWin(){
   //initiate 
   let blurDiv = document.getElementById("winPopUpBlur")
   blurDiv.style.display = "block"

   //display winner
   let winnerDisplay = document.getElementById("winnerDisplayed")
   winnerDisplay.innerHTML = `The winner is: <strong>${firstLaterToUpper(winner)}</strong>`

   //display game
   let displayGameAfterWinImg = document.getElementById("displayGame").children
   for(let i=0;i<3;i++){
      for(let j=0;j<3;j++){
         displayGameAfterWinImg[getTableDataPlace(i,j)].src = winDisplayImgMap.get(grid[i][j])
      }
   }

   //number of won games
   let circleWins = 0
   let crossWins = 0
   winHistory.forEach((element)=>{
      switch(element){
         case "circle":
            circleWins +=1
            break
         case "cross":
            crossWins +=1
            break
      }
   })
   let circleWinsOutput = document.getElementById("wonGamesByCircle")
   let crossWinsOutput = document.getElementById("wonGamesByCrosse")
   circleWinsOutput.innerHTML = `Circle won <strong>${circleWins}</strong> games`
   crossWinsOutput.innerHTML = `Cross won <strong>${crossWins}</strong> games`
   // list of games
   let listOfOldGames = document.getElementById("listOfAllGamesWon")
   listOfOldGames.innerHTML = ""
   winHistory.forEach((element)=>{
      let listItem = document.createElement("li")
      listItem.textContent = firstLaterToUpper(element)
      listOfOldGames.appendChild(listItem)
   })
}



function checkForWin(){
   //things that happen when the game is won
   function winOperation(winner_name){
      let winnerName = winner_name
      winner = winnerName
      winHistory.push(winnerName)
      gameWasFinished = true
      for(let i=0;i<9;i++){
         allButtonsInTable[i].classList.add("noBackgroundTransition")
      }
      popUpWin()
   }
   function checkArrayForWin(arr){
      if(arr[0] == arr[1] && arr[0] == arr[2] && arr[0]!==false){
         winOperation(arr[0])
         return true
      }
   }
   if(gameWasFinished){
      return
   }

   //win in a row
   for(let i=0;i<3;i++){
      if(checkArrayForWin([grid[i][0], grid[i][1], grid[i][2]])){
         return true
      }
   }
   //win in a colum
   for(let i=0;i<3;i++){
      if(checkArrayForWin([grid[0][i], grid[1][i], grid[2][i]])){
         return true
      }
   }
   //win in a diagonal
   let diagonal = []
   //top left -> bottom right
   for(let i=0;i<3;i++){
      diagonal[i] = grid[i][i]
   }
   if(checkArrayForWin(diagonal)){
      return true
   }
   //top right -> bottom left
   for(let i=0;i<3;i++){
      diagonal[i] = grid[i][2-i]
   }
   if(checkArrayForWin(diagonal)){
      return true
   }
   return false
}

///useful functions
const firstLaterToUpper=((string)=>{return string.charAt(0).toUpperCase() + string.slice(1)})