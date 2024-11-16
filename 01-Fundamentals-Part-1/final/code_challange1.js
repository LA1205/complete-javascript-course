const Markmass = 78;
const Markheight = 1.69;
const Johnmass = 92;
const Johnheight = 1.95;
let BMIMark = Markmass / Markheight ** 2;
let BMIJohn = Johnmass / Johnheight ** 2;
let markHigherBMI = BMIMark > BMIJohn;
console.log("Mark has heigher BMI is", markHigherBMI, ".");
// console.log("Mark has heigher BMI is " + markHigherBMI + ".");
let a