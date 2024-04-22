const pi = Math.PI;
const koren3 = Math.sqrt(3)
let DataObject = {
    "a":0,
    "b":0,
    "c":0,
    "d":0,
    "e":0,
    "f":0,
    "r":0,
    "Alfa":0,
    "Beta":0,
    "Gama":0,
    "Delta":0,
    "premer":0,
    "visina":0,
    "obseg":0,
    "osnovnaPloskev":0,
    "povrsina":0,
    "volumen":0,
    "visinaTelesa":0

}
var a 
var b  
var c  
var d  
var e  
var f  
var r  
var Alfa  
var Beta  
var Gama  
var Delta  
var premer  
var visina  
var obseg  
var osnovnaPloskev  
var povrsina  
var volumen  
var visinaTelesa
var decimalPlaces

function GetDecimalPaces(){
    if (document.getElementById("decimal") == "") {return 1}
        else {return Number(document.getElementById("decimal").value)}
}
function decimalRound(x , numberOfDecimal){
    decimal = 10**numberOfDecimal
    return Math.round(x*decimal)/decimal
}
function getDataFor(NameArrey, veriablesArrey){
    for(let i=0; i<veriablesArrey.length;i++){
        let name = NameArrey[i]
        let veriable = veriablesArrey[i]
        let element = document.getElementById(name)
        if(element == "") {DataObject[veriable] = 0}
            else{DataObject[veriable] = element.value}
    }
}
function ConvertDataFromObjectToVeriables(){
    a = DataObject["a"]
    b = DataObject["b"]
    c = DataObject["c"]
    d = DataObject["d"]
    e = DataObject["e"]
    f = DataObject["f"]
    r = DataObject["r"]
    Alfa = DataObject["Alpha"]
    Beta = DataObject["Beta"]
    Gama = DataObject["Gama"]
    Delta = DataObject["Delta"]
    premer = DataObject["premer"]
    visina = DataObject["visina"]
    obseg = DataObject["obseg"]
    osnovnaPloskev = DataObject["osnovnaPloskev"]
    povrsina = DataObject["povrsina"]
    volumen = DataObject["volumen"]
    visinaTelesa = DataObject["visinatelesa"]
}
function ConvertDataFromVeriablesToObject(){
    DataObject["a"] = a
    DataObject["b"] = b
    DataObject["c"] = c
    DataObject["d"] = d
    DataObject["e"] = e
    DataObject["f"] = f
    DataObject["r"] = r
    DataObject["Alpha"] = Alfa
    DataObject["Beta"] = Beta
    DataObject["Gama"] = Gama
    DataObject["Delta"] = Delta
    DataObject["premer"] = premer
    DataObject["visina"] = visina
    DataObject["obseg"] = obseg
    DataObject["osnovnaPloskev"] = osnovnaPloskev
    DataObject["povrsina"] = povrsina
    DataObject["volumen"] = volumen
    DataObject["visinatelesa"] = visinaTelesa
}
function OutputData(NameArrey, veriablesArrey){
    for(let i=0;i<veriablesArrey.length;i++){
        let name = NameArrey[i]
        let veriable = veriablesArrey[i]
        document.getElementById(name).value = decimalRound(DataObject[veriable], GetDecimalPaces())
    }
}


function krog(){
    var NeadedData = ["r", "premer", "osnovnaPloskev", "obseg"]
    var dataInHTML = ["polmer", "premer", "osnovnaPloskev", "obseg"]
    getDataFor(dataInHTML, NeadedData)
    ConvertDataFromObjectToVeriables()
    if (r > 0){
        premer= r*2 
        obseg = 2*pi*r
        osnovnaPloskev = pi*(r*r) 
    }
    else if (premer> 0){
        r = premer/ 2
        obseg = 2 * pi * r
        osnovnaPloskev = pi * (r*r)
    }
    else if (obseg > 0){
        r = obseg / (2 *pi)
        premer= r * 2
        osnovnaPloskev = pi * (r*r)
    }
    else if(osnovnaPloskev > 0){
        r = Math.sqrt(osnovnaPloskev / pi)
        premer= r * 2 
        obseg = 2 * pi * r
    }
    ConvertDataFromVeriablesToObject
    OutputData(dataInHTML, NeadedData)
}
//function krozniLok(){}
function enakostranicni_3kotnik(){
    var NeadedData = ["a","visina","obseg","osnovnaPloskev"]
    var dataInHTML = ["StranicaA","Visina","Obseg","OsnovnaPloskev"]
    getDataFor(dataInHTML,NeadedData)
    ConvertDataFromObjectToVeriables()
    if (a > 0){
        visina = (a * koren3) / 2
        obseg = a * 3
        osnovnaPloskev = ((a*a)*koren3) / 4
    }
    else if (visina > 0){
        a = (2 * visina) / koren3
        obseg = a * 3
        osnovnaPloskev = ((a * a) * koren3) / 4
    }
    else if (obseg > 0){
        a = obseg / 3
        visina = (a * koren3) / 2
        osnovnaPloskev = ((a * a) * koren3) / 4
    }
    else if (osnovnaPloskev > 0){
        a = Math.sqrt((4 * osnovnaPloskev) / koren3)
        visina = (a * koren3) / 2
        obseg = a * 3
    }
    ConvertDataFromVeriablesToObject()
    OutputData(dataInHTML,NeadedData)
}
function pravokotni_3kotnik(){
    var NeadedData = ["a","b","c","obseg","osnovnaPloskev"]
    var dataInHTML = ["StranicaA","StranicaB","StranicaC","Obseg","OsnovnaPloskev"]
    getDataFor(dataInHTML,NeadedData)
    ConvertDataFromObjectToVeriables()
    if (a>0 && b>0){
        c = Math.sqrt(a*a + b*b)
        obseg = a+b+c
        osnovnaPloskev = (a*b)/2
    }
    else if (a>0 && c>0){
        b = Math.sqrt(c*c - a*a)
        obseg = a+b+c
        osnovnaPloskev = (a*b)/2
    }
    else if (a>0 && obseg>0){
        b = (obseg*obseg - 2*a*obseg)/(2*obseg - 2*a)
        c = Math.sqrt(a*a + b*b)
        osnovnaPloskev = (a*b)/2
    }
    else if (a>0 && osnovnaPloskev>0){
        b = osnovnaPloskev*2/a
        c = Math.sqrt(a*a + b*b)
        obseg = a+b+c
    }
    else if (b>0 && c>0){
        a = Math.sqrt(c*c - b*b)
        obseg = a+b+c
        osnovnaPloskev = (a*b)/2
    }
    else if (b>0 && obseg>0){
        a = (obseg*obseg - 2*b*obseg)/(2*obseg - 2*b)
        c = Math.sqrt(a*a + b*b)
        osnovnaPloskev = (a*b)/2
    }
    else if (b>0 && osnovnaPloskev>0){
        a = osnovnaPloskev/2/b
        c = Math.sqrt(a*a + b*b)
        obseg = a+b+c
    }
    else if (c>0 && obseg>0){
        a = (c - obseg + Math.sqrt(2*obseg*c + c*c - (obseg*obseg))) / -2
        b = Math.sqrt(c*c - a*a)
        osnovnaPloskev = (a*b)/2
    }
    else if (c>0 && osnovnaPloskev>0){
        a = Math.sqrt((c*c + Math.sqrt(c**4 - 16*(osnovnaPloskev*osnovnaPloskev))) / 2)
        b = Math.sqrt(c*c - a*a)
        obseg = a+b+c
    }
    ConvertDataFromVeriablesToObject()
    OutputData(dataInHTML,NeadedData)
}
function enakokraki_3kotnik(){
    if(a>0 && obseg>0){
        c = obseg - a*2
        Delta = (a*a + a*a - c*c) / 2*a*a
        visina = a * Math.sin(Delta)
    }

}
function kvadrat(){
    var dataInHTML = ["Stranica","Diagonala","Obseg","OsnovnaPloskev"]
    var NeadedData = ["a","e","obseg","osnovnaPloskev"]
    getDataFor(dataInHTML,NeadedData)
    ConvertDataFromObjectToVeriables()
    if (a > 0){
        e = a * koren3
        obseg = a * 4
        osnovnaPloskev = a * a 
    }
    else if (e > 0){
        a = e / koren3
        obseg = a * 4
        osnovnaPloskev = a * a 
    }
    else if (obseg > 0){
        a = obseg / 4
        e = a * koren3
        osnovnaPloskev = a * a 
    }
    else if (osnovnaPloskev > 0){
        a = Math.sqrt(osnovnaPloskev)
        e = a * koren3
        obseg = a * 4
    }
    ConvertDataFromVeriablesToObject()
    OutputData(dataInHTML,NeadedData)
}