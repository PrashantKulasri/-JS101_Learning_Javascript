//Problem 4: Given 3 numbers (all different values), print which is greatest

const number1 = 12;
const number2 = 53;
const number3 = 14;

if((number1 > number2) && (number1 > number3)){
  console.log(number1,"is the greatest");
}
else if((number2 > number1) && (number2 > number3)){
  console.log(number2,"is the greatest");
}
else{
  console.log(number3,"is the greatest");
}
