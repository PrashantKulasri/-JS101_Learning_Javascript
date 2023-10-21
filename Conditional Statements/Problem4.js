//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

console.log("\n\n\t","*************** |WELCOME TO MASAI| ***************");
"\n\n\t"
const username = "Ram";
const Password = 123456;

let name = "Ram";
let password = 123456;

if(username === name){
  console.log("\n\n\t",name,"is the correct Username")
  if(Password === password){
    console.log("\n\n\t",password,"is the correct Password")
    "\n\n\t"
    console.log("\n\n\t","welcome",username,"\n\n\tWelcome to Masai School")
  }
  else{
    console.log("\n\n\t","Your Password",password,"is not matching the stored Password\n\n\tTry Again!!")
  }
}
else{
    console.log("\n\n\t","Your Username",name,"is not matching the stored Username\n\n\tTry Again!!")
  }

