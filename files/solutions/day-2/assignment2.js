// question 1

let name=prompt("what's your name?");
console.log(name);

//-----------------------------------------

// question 2

// methods of string

var txt = "ABCDEFG HIJK LMNOPQRSTUVWXYZ";
console.log(txt.length);


console.log(txt.indexOf("HIJK"));


var str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate"));

console.log(str.lastIndexOf("locate", 15));

console.log(str.search("locate"));


var str1="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(str1.slice(7, 13));

console.log(str1.slice(-12, -6));

console.log(str1.slice(7));

console.log(str1.slice(-12));

console.log(str1.substring(7, 13));

console.log(str1.substr(7));

console.log(str1.substr(-4));


var str2="java is easy to unerstand"

console.log(str2.replace("java", "javascript"));

// methods of array

var langs = ["java", "js", "python", "node"];

console.log(langs.pop());

console.log(langs.push("express"));
console.log(langs.shift());
console.log(langs.unshift("mongodb"));
console.log(langs[langs.length] = "express");
console.log(delete langs[0]);
var langs = ["java", "js", "python", "node"];
console.log(langs.splice(2, 0, "express", "mongodb"));
var langs = ["java", "js", "python", "node"];
console.log(langs.splice(0, 1));


//-----------------------------------------------

// question 3

let age=prompt("enter your age:");
if (age>21){
    console.log("eligible to drink");
} else {
    console.log("not eligible to drink");
}
