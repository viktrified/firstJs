// I NO GO STRESS ABOUT THE TEST AGAIN SEF
// universal encoding standard
// variables are containers for storing data
// always declare variables before use.
// const is actually good for security
// an unassigned variable in javascript is set to undefined
// hoisting error for let and const are called `ReferenceError`!
// variable name, value, reference
// you can modify the state of a const array and object but you can't reassign it.
// + operator is called concatenation operator with strings

let x = 5;
let y = 10;
let sum = x + y;
// console.log(sum);

function myFunction() {
  demo = document.getElementById("demo").innerHTML = "Result: " + sum;
  // window.print();
}
// myFunction();

let day = 8;

if (day === "Monday") {
  console.log(7);
} else if (day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
  console.log(4);
} else if (day === "Friday") {
  console.log(9);
} else {
  // console.log(8);
}

switch (day) {
  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
  case 4:
    console.log("dem three");
    break;

  case 5:
    console.log(5);
    break;

  case 6:
  case 7:
    console.log("dem two");
    break;

  default:
  // console.log("bye");
}

// let variable and functions are blocked scoped
// there's initialisation, decleration, execution and assignment
// initialisation refers to the first value given to a declared variable
// definition and instantiation
// definition is similar to declaration but involves both declaring and assigning
// temporal dead zone
// function selectors refers to the function name and its parameter!
// const must be assigned a value when they are declared!
// you can call things within an array and object members || elements || fields
// STRING ARE COMPARED ALPHABETICALLY

// console.log(a);
let a = 5;
// In this case, even though let a; is hoisted, trying to access a
// before the line let a = 5; leads to a ReferenceError because of the TDZ.

let radius;
let area;
// radius = prompt("Enter the radius of the circle:");
area = Math.PI * Math.pow(radius, 2);
// console.log(`The area of the circle is: ${area}`);

const arr = ["lib", "app", "storage"];
// arr.pop();
arr.push("stuffs");
// console.log(arr);

const constFunction = () => {};

const seeObj = {
  name: "Victory",
  age: 21,
  isAlive: true,
  job: null,
};
seeObj.name = "Chidera";
// console.log(seeObj);

const wahala = 30;

const myModulus = () => {
  if (wahala % 2 === 0) {
    // console.log("even number");
  } else {
    // console.log("odd number");
  }
};
myModulus();
