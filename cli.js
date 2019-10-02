// We are trying to get the user input and
// piece out what they are trying to do, and the input itself


var choice = process.argv[2];
var subject = process.argv.slice(3).join(" ");
var TV = require("./tv.js");

console.log(choice);
console.log(subject);
var tv = new TV();
if(choice === "show"){
    tv.findShow(subject);
} else if(choice === "actor"){
    console.log("we are looking for an actor");
    console.log(subject);
} else {
    console.log("look for a show or actor in the following format");
    console.log("node cli.js actor Jennifer Aniston");
    console.log("node cli.js show The Expanse");
}