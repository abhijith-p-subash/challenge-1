
//inputs
var markMass = prompt("Enter Mark Body Mass(Kg): ");
var markHeight = prompt("Enter Mark Height(meter):");
var johnMass = prompt("Enter John Body Mass (Kg): ");
var johnHeight = prompt("Enter John Height (meter):");

//BMI calculation
var markBMI = markMass / (markHeight * markHeight);
var JohnBMI = johnMass / (johnHeight * johnHeight);

console.log("Mark BMI: " + markBMI);
console.log("John BMI: " + JohnBMI);

var bmiCompare = markBMI > JohnBMI;

console.log("Is Mark's BMI higher than John's?" + bmiCompare);