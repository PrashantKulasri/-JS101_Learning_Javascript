// Problem 1: Find the average of elements present at odd index of the following array.

let arr = [10, 24, 56, 72, -10, -88, 100, 564];

function average(){
  var sum = 0;
  var count = 0;
  for(var a=0;a<arr.length;a++){
    if(a%2!==0){
      count++;
      sum = sum + arr[a];
    }
  }
  console.log(sum/count);
}
average();