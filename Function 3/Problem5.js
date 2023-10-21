//Write a custom function that has the same behavior of inbuilt Array Includes Function

function yesorno(arr,check){
    count = 0;
    for(var a=0;a<arr.length;a++){
      if(check === arr[a]){
       count++;
      }
    }
  
    if(count > 0){
      console.log(true);
    }else{
      console.log(false);
    }
  }
  
  const num = [1, 2, 3];
  
  yesorno(num,90);