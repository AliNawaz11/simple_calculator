#! /usr/bin/env node

import inquirer from "inquirer";

let ans=await inquirer.prompt([

{message:"enter number",type:"number",name:"firstnumber"},

{message:"enter number",type:"number",name:"secondnumber"},

{message:"select operator to perform any operation",type:"list",name:"operator",choices:["addition","subtraction","multiply","division"]},


]);
if(ans.operator==="addition"){
    console.log(ans.firstnumber+ans.secondnumber);
    
}
else if(ans.operator==="subtraction"){
    console.log(ans.firstnumber-ans.secondnumber);
    
}
else if(ans.operator==="multiply"){
    console.log(ans.firstnumber*ans.secondnumber);
    
}
else if(ans.operator==="division"){
    console.log(ans.firstnumber/ans.secondnumber);
    
}