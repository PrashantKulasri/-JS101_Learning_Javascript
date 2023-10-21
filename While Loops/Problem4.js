//Problem 4: Print the average of even numbers from 1 to 100 (both included)

let sum = 0;
let counting = 0;
let number = 1;
while(number <= 100){
  if(number % 2 === 0){
    sum = sum + number;
    counting = counting + 1;
  }
  number++;
}
let average = (sum/counting);
console.log(average);