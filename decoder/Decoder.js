var output= []
var decodeMap = new Map([
        ["a","alpha"],
        ["b","bravo"],
        ["c","charlie"],
        ["d", "delta"],
        ["e", "echo"],
        ["f", "foxfrot"],
        ["g", "golf"],
        ["h", "hotel"],
        ["i", "india"],
        ["j", "juliet"],
        ["k", "kilo"],
        ["l", "lima"],
        ["m", "mike"],
        ["n", "november"],
        ["o", "oscar"],
        ["p", "papa"],
        ["q", "quebec"],
        ["r", "romeo"],
        ["s", "sierra"],
        ["t", "tango"],
        ["u", "uniform"],
        ["v", "victor"],
        ["w", "whiskey"],
        ["x", "x-ray"],
        ["y", "yankee"],
        ["z", "zulu"],
        [" ", "space in between"]
      ])
    
function decode(){
  var data = document.getElementById("Word").value
  if (data == ""){
      consol.log("error")
      }
  else{
    var arr = data.split("")
  for(var i=0; i<arr.length;){
    output.push(decodeMap.get(arr[i]))
    i++
    }
  } 
  document.getElementById("output").textContent = output
  output = []
}