// Task/Activties 1
function addTwoNumber(num1,num2){
    add = num1+num2
    console.log(`Add Two Number`,add);
}

addTwoNumber(12,3)

//task 2

substract = (num1,num2) => { console.log(`Substract Two Number`,num1-num2);}
substract(13,3)

//task 3

multiply = (num1,num2) => {console.log(`Multiply`,num1*num2);}
multiply(3,3)

//task 4

divide = (num1,num2) => {console.log(`Divide`,num1/num2)}
divide(4,2)

// Task 5
// To find the reminder 

toFindReminder = (num1,num2)=>{ console.log(`Reminder of ${num1} & ${num2}`,num1%num2); }
toFindReminder (10,2)
toFindReminder (10,3)

// Task 6 Assignment Operator

let scoresAdd = 1
scoreAdd=()=>{ scoresAdd +=2; console.log(`+= Assignment Operator`,scoresAdd);}
scoreAdd()

// Task 7 Assignment Operator

let scoresSub = 3
scoreSub = ()=>{ scoresSub -=2; console.log(`-= Assignment Operator`,scoresSub); }
scoreSub()

// Activities 3 Comparsion Operator
// Task 8 

greaterThan=(num1,num2)=>{ greater=num1>num2; 
    console.log(`${num1} is Greater than ${num2} :`,greater);
}
greaterThan(12,3)
greaterThan(2,3)

lesserThan=(num1,num2)=>{lesser=num1<num2; 
    console.log(`${num1} is Lesser than ${num2} :`,lesser);
}
lesserThan(5,8)
lesserThan(10,8)

//Task 9

greaterEqualTo=(num1,num2)=>{ result= num1>=num2; 
    console.log(`${num1} is Greater equal to ${num2} :`, result);
 }
greaterEqualTo(12,12)
greaterEqualTo(12,10)
greaterEqualTo(2,10)

lesserEqualTo=(num1,num2)=>{ result= num1<=num2; 
    console.log(`${num1} is lesser equal to ${num2} :`, result);
 }
lesserEqualTo(12,12)
lesserEqualTo(12,10)
lesserEqualTo(2,10)

// Task 10 

console.log(`comparison with "=="`,undefined==0);
console.log(`comparison with "=="`,undefined===0);
// console.log(undefined>=0);
// console.log(undefined<=0);
// console.log(undefined<0);
// console.log(undefined>0);

// console.log(null<=0);
// console.log(null ===0);

// Activity 4 Logical Operator
// Task 11  

let isLoggedOut = false;
let isLoggedIn = true;

console.log( isLoggedOut && `No Login`);
console.log( isLoggedIn && `you are a Senior Web Developer`);

// Task 12 

function greet(name){
    let greeting = name || "Jai Shri ram" ;
    console.log("Ram Ram",greeting); 
}

greet("Narayan")
greet("")
greet()

//Task 13 

let username = true

if(!username == true){
    console.log(`!username is false`,!username);
}else{
    console.log(`!username is true`,!username);
    
}

// Activity 5 Ternary Operator
// Task 14

let checkNum = '1'

let resultess = checkNum === 1 ? "Number 1 is the pure Number" : "Number 1 is manipulated number" 
console.log(resultess);
