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
}