// Write code to calculate the average of an array
// If there are no items in the array it should return 0
// NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

var arr1 = [1,2,3,4,5,6,7,8,9,10];

function findsum(valueforsum){
  sumofthevalues = 0;
  if(valueforsum.length !== 0){
    for(var a=0;a<valueforsum.length;a++){
    sumofthevalues = sumofthevalues + valueforsum[a];
  }
  }else{
    return sumofthevalues;
  }
return sumofthevalues;
}

var sum = (findsum(arr1));

function findaverage(total){
  return (total/arr1.length)
}

var average = (findaverage(sum));

console.log("Average is : ",average);