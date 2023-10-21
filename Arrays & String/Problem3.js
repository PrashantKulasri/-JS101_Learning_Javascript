//Problem 3 : Given an array of numbers find the average of all the even numbers.
var arr = [1,2,3,4,5,6,7,8,9,98,87,76,65,54,43,21,10];
var sum = 0;
var count = 0;
for(var a=0;a<arr.length;a++){
  if(arr[a]%2 === 0){
    sum = sum +arr[a];
    count++;
  }
}
console.log(sum/count);