// question 1

var numb = prompt("enter a number");
var res;
if(numb%2==0){
    res="even";
} else {
    res="odd";
}

console.log(`The number entered is ${numb} and Number is ${res}`);

// question 2

var str=prompt("enter os name:");
var arr=str.split(" ");
console.log(`The OS name is ${arr[0]} and version is ${arr[1]}`);

// question 3

marks=prompt("enter your marks:");
var grade;
if(marks>=75){
    grade='A';
} else if(50 <= marks < 75){
    grade='B';
} else if (40<= marks<50){
    grade='C';
} else if (marks<40){
    grade='F'
}
console.log(`Marks are ${marks} and grade is ${grade}`)


  // using ternary

grade = marks>50? 'A' : 'B';

console.log(`Marks are ${marks} and grade is ${grade}`)