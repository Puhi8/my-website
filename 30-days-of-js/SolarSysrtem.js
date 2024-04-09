const GForce = new Map([
    ["mercury", 3.59],
    ["venus", 8.87],
    ["earth", 9.81],
    ["mars", 3.77],
    ["jupiter", 25.95],
    ["saturn", 11.08],
    ["uranus", 10.67],
    ["neptun", 12.07]
])
const PlanetPicture = new Map([
    ["mercury", "images-solar/mercury.png"],
    ["venus", "images-solar/venus.png"],
    ["earth", "images-solar/earth.png"],
    ["mars", "images-solar/mars.png"],
    ["jupiter", "images-solar/jupiter.png"],
    ["saturn", "images-solar/saturn.png"],
    ["uranus", "images-solar/uranus.png"],
    ["neptun", "images-solar/neptune.png"]
])

function go(){
    let planet = document.getElementById("planetInfo")
    GForce.get(planet)

    document.getElementById("picture").src = PlanetPicture.get(planet)
}