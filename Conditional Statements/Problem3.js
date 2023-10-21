//Problem 3: Given 2 numbers a and b print which is greater or "both equal".

var number1 = 23;
var number2 = 32;

if(number1 === number2){
  console.log(number1,"is equal to",number2)
}
else if(number1 > number2){
  console.log(number1,"is greater than",number2)
}
else if(number1 < number2){
  console.log(number2,"is greater than",number1)
}
else{
  console.log("ERROR!!")
}