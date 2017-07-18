var myArray = ["Aaron", "Basketball", "5", 2001, true, "Amari", "no"];
myArray[0]; //returns '0th' index
myArray.length; //length of array
myArray.push(42); //add to array's end
myArray.pop(42); //remove last item in array
myArray.length = 0; //empty an array
// Arrays can contain variables but they must be defined

// for conditions, recursive function
for (var i=0; i<5; i++){
    console.log("Mahdi rules");
}

var myArray = ["bob", "mahdi", "cyril", "juan", "mike"];
console.log(myArray[0]);
//so on and so forth
//GIT HUB

// how to save

git add .

git commit -m "messege"

git push

git init

//CONDITIONALS

// greater than
5<0 // false
// less than
1<3 true //true
//equal
7==7 // true
//not equals
4!=// false

//functions

function functionName(){
    //stored code to be executed
}
// to call a function
functionName();

// MATH.

var randNum = Math.random()*4;

console.log(randNum);

console.log(Math.round(randNum));
console.log(Math.floor(randNum));
// Test Code
let planet = 'Earth';

switch (planet) {
  case "Mercury":
  case "Venus":
    console.log("Too hot here.");

  case 'Earth' :
    console.log("Welcome home!");
    break;

  case 'Mars' :
    console.log("Welcome to the other home!");
    break;

  case "Jupiter":
  case "Saturn":
  case "Uranus":
  case "Neptune":
  case "Pluto":
    console.log("You may get gold here.");
    break;

  default:
    console.log("Seems you found another planet.");
    break;
}\
//
function Superhero(realName){
    this.realName = realName;
}

var superman = new Superhero("Clark Kent");
console.log(superman.realName);

function Pokemon(type){
    this.type = type;
}
var watertype = new Pokemon("Squirtle");
console.log(watertype.type)
// converts listed array to strings
toString()