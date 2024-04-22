///DATA///  
const GForce = 0
const PlanetPicture = 1
const PlanetData = new Map([
    ["mercury", [3.59, "images-solar/mercury.png"]],
    ["venus", [8.87, "images-solar/venus.png"]],
    ["earth", [9.81, "images-solar/earth.png"]],
    ["mars", [3.77, "images-solar/mars.png"]],
    ["jupiter", [25.95, "images-solar/jupiter.png"]],
    ["saturn", [11.08, "images-solar/saturn.png"]],
    ["uranus", [10.67, "images-solar/uranus.png"]],
    ["neptune", [12.07, "images-solar/neptune.png"]]
])
var Mass

function go(){
//get info
    if(document.getElementById("mass") == ""){Mass = 0}
    else {Mass =  document.getElementById("mass").value}
    let planet = document.getElementById('Planets').value
//math    
    var Force = Math.round(Mass * (PlanetData.get(planet))[GForce] * 100)/100
//write a number
    document.getElementById("output").innerHTML = Force + "N"
//add: Img source, class
    document.getElementById("picture").src = (PlanetData.get(planet))[PlanetPicture]
    document.getElementById("outputDiv").classList.add("output-div")
    
}