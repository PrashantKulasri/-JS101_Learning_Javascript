// Problem 2: Create a new array from the given array such that each element of the new array is raised to a power of 5.

var i = [2, 3, 4, 6, 7];

function power(){
  var arr = [];
  for(var a=0;a<i.length;a++){
    arr.push(i[a]**5);
  }
  console.log(arr);
}
power();
