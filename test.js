//var data = await import("./test.json", {with:{type: "json"},})
//import data from "test.json"
//var data = fetch("./test.json").then(Response => Response.json()).then(data => console.log(data))
//import data from './test.json' assert {type: "json"}
//console.log(data)

const testjson = new Request("./test.json")
console.log(testjson)