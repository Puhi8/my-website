///global data
let listOfItems = []
let output = []

///event listeners
//add item
let addItem_eventListener = document.getElementById("itemInput")
addItem_eventListener.addEventListener("keypress", function(event){
   if(event.key == "Enter"){document.getElementById("addItemButton").click()}
})
//number of items in one combination
let numberOfItemsInOneCombination_eventListener = document.getElementById("numberOfItemsInOneCombination")
numberOfItemsInOneCombination_eventListener.addEventListener("keyup", function(){
   combine()
})
//joining items 
let joinWith_eventListener = document.getElementById("joinWith")
joinWith_eventListener.addEventListener("keyup", function(){
   displayOutput()
})

///error checking
//tracking to not overflow the console
const errorsInConsole = {
   notEnoughData: false
}
//error checking functions
const errorCheck = {
   notEnoughData: function(numberOfAllItems, numberRequested, sentByTheScript){
      if(numberRequested>numberOfAllItems && !sentByTheScript){
         if(!errorsInConsole.notEnoughData){
            console.error("Not enough data")
            errorsInConsole.notEnoughData = true
         }
         return true
      }
   }
}

///displaying information to the HTML
function display(){
   //get and clear list of items
   const list = document.getElementById("listOfItemsInUse")
   list.innerHTML = ""
   //display everything that is in the list (listOfItems)
   for(let i=0;i<listOfItems.length;i++){
      let image = document.createElement("img")
      image.src = "../img/trash-red1.png"
      let listItem = document.createElement("li")
      let text = document.createElement("p")
      let button = document.createElement("button")
      text.textContent = listOfItems[i]
      button.appendChild(image)
      button.onclick = function(){removeItem(String(i))}
      button.classList.add("delButton")
      listItem.appendChild(text)
      listItem.appendChild(button)
      listItem.classList.add("listItem")
      list.appendChild(listItem)
   }
   combine(true)
}
function displayOutput(){
   let joinWith
   let outputList = document.getElementById("outputList")
   if(document.getElementById("joinWith").value == ""){joinWith = ", "}
   else{joinWith = document.getElementById("joinWith").value}
   outputList.innerHTML = ""
   output.forEach(element => {
      let listItem = document.createElement("li")
      listItem.textContent = element.join(joinWith)
      outputList.appendChild(listItem)
   })
}

///functions activated by buttons from HTML
function addItem(){
   let itemToAdd = document.getElementById("itemInput").value
   if(itemToAdd == ""){return}
   listOfItems.push(itemToAdd)
   document.getElementById("itemInput").value = ""
   display()
}
function removeItem(placeInList){
   listOfItems.splice(placeInList,1)
   display()
}
function combine(sentAutomatically){
   let numberInOneSet
   if (document.getElementById("numberOfItemsInOneCombination").value == "") {numberInOneSet=2}
   else{numberInOneSet = Number(document.getElementById("numberOfItemsInOneCombination").value)}
   if(errorCheck.notEnoughData(listOfItems.length, numberInOneSet, sentAutomatically)){
      //send and display only if the user manually puts in too big of a number(number in one combination)
      let outputList = document.getElementById("outputList")
      outputList.innerHTML=`<p class="error">Error: Not enough data. Number of items in one combination is bigger then the number of all items in the list.</p>`
      return
   }
   errorsInConsole.notEnoughData = false //there is no more error, so continuo logging 
   output = generateCombinations(listOfItems, numberInOneSet)
   displayOutput()
}

///functional functions
function generateCombinations(arr, size) {
   const results = []
   function helper(current, index) {
      if (current.length === size) {
         results.push(current.slice())
         return
      }
      for (let i=index; i<arr.length;i++) {
         current.push(arr[i])
         helper(current, i + 1)
         current.pop()
      }
   }
   helper([], 0)
   return results
}