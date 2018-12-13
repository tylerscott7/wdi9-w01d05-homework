//    A. Q + A
// 1. How do we assign a value to a variable?
// A. By initializing a variable with let or const and
//    setting it equal to a value.
//
// 2. How do we change the value of a variable?
// A. By reassigning a value to the variable with an = sign.
//
// 3. How do we assign an existing variable to a new variable?
// A. By setting the new variable equal to the existing one.
//
// 4. Remind me, what are declare, assign, and define?
// A. Declare: Telling the computer what data type th variable is
//    and allocating memory for said variable.
//    Assign: Setting up the actual value of the variable.
//    Define: Telling the computer the data type of the variable.
// 
// 5. What is pseudocoding and why should you do it?
// A. Pseudocoding is a way of logically mapping a program
//    in plain language instead of valid javascript.
// 
// 6. What percentage of time should be spent thinking about
//    how you're going to solve a problem vs actually typing 
//    in code to solve it?
// A. Much more time should be spent coming up with the solution
//    than actually programming. Roughly 90% to 10%.
//
//    B. Strings
// 1. 
let firstVariable = "Hello World";
firstVariable = 50;
let secondVariable = firstVariable;
secondVariable = "Hello";
// Value of firstVariable should be 50
// 2.
let yourName = "Tyler";
let newString = "Hello, my name is " + yourName;
//
//    C. Booleans
// 1. 
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true || false);
console.log(false || false || false || false || false || false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a + b == c);
console.log(a * a === d);
console.log(48 == '48');
//
//    D. The farm
// 1.
let animal = "cow";
if (animal === "cow"){
    console.log("mooooo");
} else {
    console.log("Hey! You're not a cow.");
};
//    E. Driver's Ed
// 1. 
let age = 16;
if (age >= 16){
    console.log("Here are the keys");
} else {
    console.log("Sorry, you're too young.");
};
//
// PART 2: LOOPS
// SECTION A - THE BASICS:
// 1.
for (let i=0;i<=10;i++){
    console.log(i);
};
// 2.
for (let i=10;i<=400;i++){
    console.log(i);
};
// 3.
for (let i=12;i<=400;i+=3){
    console.log(i);
};
// SECTION B - GET EVEN:
// 1. 2.
for (let i=0; i<=100;i+=2){
    console.log(i + "<-- is an even number");
};
// SECTION C - GIVE ME FIVE:
// 1. 2.
for (let i = 1; i<100; i++){
    if (i%5==0){
        console.log(`I found a ${i}. High five!`);
    } else if(i%3==0){
        console.log(`I found a ${i}. Three is a crowd`);
    };
};
// SECTION D - SAVINGS ACCOUNT:
// 1.
let bank_account = 0;
for (let i=0;i<=10;i++){
    bank_account += i;
};
console.log(bank_account);
// 2.
let bank_account2 = 0;
for (let i=0;i<=100;i++){
    bank_account2 += i*2;
};
console.log(bank_account2);
// SECTION E - SAVINGS ACCOUNT:
let sum = 0;
for (let i=0; i<1000;i++){
    if ((i%5 == 0)||(i%3 == 0)){
        sum += i;
    };
};
console.log(sum);