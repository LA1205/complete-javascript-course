const Markmass = 78;
const Markheight = 1.69;
const Johnmass = 92;
const Johnheight = 1.95;
let BMIMark = Markmass / Markheight ** 2;
let BMIJohn = Johnmass / Johnheight ** 2;
let markHigherBMI = BMIMark > BMIJohn;
if (markHigherBMI) {
    console.log(`Mark has higher BMI.
Mark's BMI is ${BMIMark}, and John's BMI is ${BMIJohn}.`)
} else {
    console.log(`John has higher BMI.
Mark's BMI is ${BMIMark}, and John's BMI is ${BMIJohn}.`)
}