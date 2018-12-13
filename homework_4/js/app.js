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
// SECTION E - Multiples:
let sum = 0;
for (let i=0; i<1000;i++){
    if ((i%5 == 0)||(i%3 == 0)){
        sum += i;
    };
};
console.log(sum);
// PART 3: Arrays & Control Flow
// SECTION A - Talk About it:
// 1. What are the things in an array called?
// A. The things in an array are called elements or indexes.
// 
// 2. Do arrays guarantee those things will be in order?
// A. Depends on what order you mean. They will be in
//    the order that you entered them firstly. Other than
//    that, you may sort the elements.
//
// 3. What real-life thing could you model with an array?
// A. One could model a list of their favorite foods.
//
// SECTION B - Easy Does It:
// 1.
const quotes = ["Hey dude.", "What is up?", "Killer, bro."];
//
// SECTION C - Accessing Elements:
// 1.
const randomThings = [1, 10, "Hello", true];
let firstElement = randomThings[0];
// 2. 
randomThings[2] = "World";
// 3.
console.log(randomThings[2]);
//
// SECTION D - Change Values
// 1. 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
let thirdElement = ourClass[2];
// 2. 
ourClass[4]= "Octocot";
// 3.
ourClass.push("Cloud City");
//
// SECTION E - Mix It Up
// 1.
const myArray = [5, 10, 500, 20];
myArray.push("Egon");
myArray.push("Egon2");
// 2.
myArray.unshift();
// 3.
myArray.shift("Bob Marley");
// 4.
myArray.pop();
// 5. 
console.log(myArray.reverse());
// Yes, it mutated the array. It returns the reversed array.
//
// SECTION F - Biggie Smalls
// 1.
let int = 5;
if (int < 100){
    console.log("little number");
} else {
    console.log("big number");
};
//
// SECTION G - Monkey In The Middle
// 1.
let num = 10;
if (num < 5){
    console.log("little number");
} else if(num > 10){
    console.log("big number")
} else {
    console.log("monkey")
}
// SECTION H - What's In Your Closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
  // 1.
  console.log("Kristyn is rocking that " 
  + kristynsCloset[2] + " today!");
  // 2. 
  kristynsCloset.splice(6,0,"raybans");
  console.log(kristynsCloset);
  // 3. 
  kristynsCloset[5]="stained knit hat";
  console.log(kristynsCloset);
  // 4.
  thomsCloset[0][0];
  console.log(thomsCloset[0][0]);
  // 5.
  thomsCloset[1][0];
  console.log(thomsCloset[1][0]);
  // 6.
  console.log(thomsCloset[2][0]);
  // 7.
  console.log("Thom is looking fierce in a "
  + thomsCloset[0][0] + "," + thomsCloset[1][0] + " and "
  + thomsCloset[2][2] + "!")
  // 8.
  thomsCloset[1][2] = "Footie Pajamas"
  //
  // FUNCTIONS:
  // A.
  function printGreeting (name){
      console.log(`Hello there, ${name}`)
  }
  // B.
  function printCool (name){
      console.log(`${name} is cool`)
  }
// C.
function calculateCube (num) {
    return num * num * num;
}
console.log(calculateCube(5));
// D.
function isVowel (str){
    let vowels = 'aeiou'
    if (vowels.includes(str)){
        return true;
    } else {
        return false;
    }
}
console.log(isVowel('t'));
console.log(isVowel('i'));
//