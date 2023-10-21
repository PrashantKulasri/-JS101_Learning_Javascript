// Create an object with the following functionality

// Ability to add 3 students details and their marks in 3 subjects
// Method to find the student with the least total.
// Method to find the student with the highest total.

var object = {
    emptyarray : [],
  
    data : function(name,maths,english,hindi){
      var emptyobject = {};
  
      emptyobject.Name = name;
      emptyobject.Maths = maths;
      emptyobject.English = english;
      emptyobject.Hindi = hindi;
  
      this.emptyarray.push(emptyobject);
    },
  
    lowestmarks : function(){
      var mini = Infinity;
      var name = "";
  
      for(var a=0;a<this.emptyarray.length;a++){
        var sum = this.emptyarray[a].Maths + 
        this.emptyarray[a].English + this.emptyarray[a].Hindi;
        if(sum < mini){
          mini = sum;
          name = this.emptyarray[a].Name;
        }
      }
      console.log("Lowest : ",name,mini);
    },
  
    highestmarks : function(){
      var max = -Infinity;
      var name = "";
  
      for(var a=0;a<this.emptyarray.length;a++){
        var sum = this.emptyarray[a].Maths + 
        this.emptyarray[a].English + this.emptyarray[a].Hindi;
        if(sum > max){
          max = sum;
          name = this.emptyarray[a].Name;
        }
      }
      console.log("Highest : ",name,max);
    }
  
    
  }
  
  object.data("Shyam",98,65,33);
  object.data("Om",20,51,99);
  object.data("Ram",45,56,67);
  
  
  console.log(object.emptyarray);
  object.lowestmarks();
  object.highestmarks();
  
  
  
  
  