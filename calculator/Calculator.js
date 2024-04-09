const pi = Math.PI;
const koren3 = Math.sqrt(3)
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var r = 0;
var Alfa = 0;
var Beta = 0;
var Gama = 0;
var Delta = 0;
var premer = 0;
var visina = 0;
var obseg = 0;
var osnovnaPloskev = 0;
var povrsina = 0;
var volumen = 0;
var visinaTelesa = 0;
var decimalPlaces = 0;
//var data = [a, b, c, d, f, e, r, premer, visina, obseg, osnovnaPloskev, povrsina, volumen, visinaTelesa];

function GetDecimalPaces(){
    if (document.getElementById("decimal") == "") {decimalPlaces = 1}
    else {decimalPlaces = Number(document.getElementById("decimal").value)}
}
function decimalRound(x , numberOfDecimal){
    decimal = 10**numberOfDecimal
    return Math.round(x*decimal)/decimal
}

function krog(){
    if (document.getElementById("polmer_krog") == "" ) {r = 0;}
        else {r = document.getElementById("polmer_krog").value}
    if (document.getElementById("premer_krog") == "" ) {d = 0;}
        else {d = document.getElementById("premer_krog").value}
    if (document.getElementById("obseg_krog") == "" ) {obseg = 0;}
        else {obseg = document.getElementById("obseg_krog").value}
    if (document.getElementById("osnovnaPloskev_krog") == "" ) {osnovnaPloskev = 0;}
        else {osnovnaPloskev = document.getElementById("osnovnaPloskev_krog").value}
    GetDecimalPaces()

    if (r > 0){
        d = r*2 
        obseg = 2*pi*r
        osnovnaPloskev = pi*(r*r) 
    }
    else if (d > 0){
        r = d / 2
        obseg = 2 * pi * r
        osnovnaPloskev = pi * (r*r)
    }
    else if (obseg > 0){
        r = obseg / (2 *pi)
        d = r * 2
        osnovnaPloskev = pi * (r*r)
    }
    else if(osnovnaPloskev > 0){
        r = Math.sqrt(osnovnaPloskev / pi)
        d = r * 2 
        obseg = 2 * pi * r
    }
    document.getElementById("polmer_krog").value = decimalRound(r, (decimalPlaces+1)) 
    document.getElementById("premer_krog").value = decimalRound(d, (decimalPlaces+1)) 
    document.getElementById("obseg_krog").value = decimalRound(obseg, decimalPlaces)
    document.getElementById("osnovnaPloskev_krog").value = decimalRound(osnovnaPloskev, decimalPlaces)
    
}
function krozniLok(){

}
function enakostranicni_3kotnik(){
    if(document.getElementById("StranicaA_Enakostranicni3-kotnik") == "") {a = 0}
        else{a = Number(document.getElementById("StranicaA_Enakostranicni3-kotnik").value)}
    if(document.getElementById("Visina_Enakostranicni3-kotnik") == "") {visina = 0}
        else{visina = Number(document.getElementById("Visina_Enakostranicni3-kotnik").value)}
    if(document.getElementById("Obseg_Enakostranicni3-kotnik") == "") {obseg = 0}
        else{obseg = Number(document.getElementById("Obseg_Enakostranicni3-kotnik").value)}
    if(document.getElementById("OsnovnaPloskev_Enakostranicni3-kotnik") == "") {osnovnaPloskev = 0}
        else{osnovnaPloskev = Number(document.getElementById("OsnovnaPloskev_Enakostranicni3-kotnik").value)}
    GetDecimalPaces()

    if (a > 0){
        visina = (a * koren3) / 2
        obseg = a * 3
        osnovnaPloskev = ((a * a) * koren3) / 4
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

    document.getElementById("StranicaA_Enakostranicni3-kotnik").value = decimalRound(a, decimalPlaces)
    document.getElementById("Visina_Enakostranicni3-kotnik").value = decimalRound(visina, (decimalPlaces))
    document.getElementById("Obseg_Enakostranicni3-kotnik").value = decimalRound(obseg, decimalPlaces)
    document.getElementById("OsnovnaPloskev_Enakostranicni3-kotnik").value = decimalRound(osnovnaPloskev, decimalPlaces)
}
function pravokotni_3kotnik(){
    if(document.getElementById("StranicaA_Pravokotni3-kotnik") == "") {a = 0}
        else{a = Number(document.getElementById("StranicaA_Pravokotni3-kotnik").value)}
    if(document.getElementById("StranicaB_Pravokotni3-kotnik") == "") {b = 0}
        else{b = Number(document.getElementById("StranicaB_Pravokotni3-kotnik").value)}
    if(document.getElementById("StranicaC_Pravokotni3-kotnik") == "") {c = 0}
        else{c = Number(document.getElementById("StranicaC_Pravokotni3-kotnik").value)}
    if(document.getElementById("Obseg_Pravokotni3-kotnik") == ""){obseg = 0}
        else{obseg = Number(document.getElementById("Obseg_Pravokotni3-kotnik").value)}
    if(document.getElementById("OsnovnaPloskev_Pravokotni3-kotnik") == "") {osnovnaPloskev = 0}
        else(osnovnaPloskev = Number(document.getElementById("OsnovnaPloskev_Pravokotni3-kotnik").value))
    GetDecimalPaces()

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
    document.getElementById("StranicaA_Pravokotni3-kotnik").value = decimalRound(a, (decimalPlaces+1))
    document.getElementById("StranicaB_Pravokotni3-kotnik").value = decimalRound(b, (decimalPlaces+1))
    document.getElementById("StranicaC_Pravokotni3-kotnik").value = decimalRound(c, (decimalPlaces+1))
    document.getElementById("Obseg_Pravokotni3-kotnik").value = decimalRound(obseg, decimalPlaces)
    document.getElementById("OsnovnaPloskev_Pravokotni3-kotnik").value = decimalRound(osnovnaPloskev, decimalPlaces)

}
function enakokraki_3kotnik(){
    if(a>0 && obseg>0){
        c = obseg - a*2
        Delta = (a*a + a*a - c*c) / 2*a*a
        visina = a * Math.sin(Delta)
    }

}
function kvadrat(){

    let diagonala = 0
    if (f > 0){diagonala = f}
    else if (e > 0){diagonala = e}

    if (a > 0){
        diagonala = a * koren3
        obseg = a * 4
        osnovnaPloskev = a * a 
    }
    else if (f > 0){
        a = diagonala / koren3
        obseg = a * 4
        osnovnaPloskev = a * a 
    }
    else if (obseg > 0){
        a = obseg / 4
        diagonala = a * koren3
        osnovnaPloskev = a * a 
    }
    else if (osnovnaPloskev > 0){
        a = Math.sqrt(osnovnaPloskev)
        diagonala = a * koren3
        obseg = a * 4
    }
}