//question 1

for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzbuzz");
    } 
    if(i%3==0){
        console.log("fizz")
    }
    if(i%5==0){
        console.log("buzz")
    }
}

// question 2

const student={
    name: "helsinki",
    age: 24,
    projects:{
        dicegame:"two player dice game using js"
    }
}

const {name,age,projects:{dicegame}}=student;

console.log(`name of the student is ${name} and age is ${age} and project is ${dicegame}`);

//question 3

let shoppingList=["eggs","milk","flour"];

let shoppingBasket=[...shoppingList,"butter","bread"];

console.log(shoppingBasket)

// question 4

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    } else if (operator === '%'){
      return firstOperand % secondOperand;
    }
  
    return secondOperand;
  }

  let a=prompt("enter numbers with spaces in between number and symbols");
  let ar=[]
  ar=a.split("");
 console.log(calculate(Number(ar[0]),Number(ar[4]),ar[2]));

 // question 5

let sales=prompt("Enter the sales value");
console.log(sales)
if(0 < sales <= 5000){
    console.log(sales*0.02);
} else if(5001 < sales <= 10000){
    console.log(sales*0.05);
} else if(10001 < sales <= 20000){
    console.log(sales*0.07);
} else if(sales < 20000){
    console.log(sales*0.1)
}

//question 6

