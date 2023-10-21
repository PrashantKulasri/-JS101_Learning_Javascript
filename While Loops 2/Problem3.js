//Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit

let sum = 0;
let number = 0;
while(number <= 100){
  if(number % 3 === 0){
    sum = sum + number;
  }
  number++;
}
console.log(sum);