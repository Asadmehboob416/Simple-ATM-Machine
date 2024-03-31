#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000
let myPin     = 1331

let pinAnswer = await inquirer.prompt(
    [
        {
            name : 'pin',
            message: 'Enter Your Pin : ',
            type: "number" 
        }
    ]
);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin!")
 
  let operationAns = await inquirer.prompt(
    [
       {
            name : "operation",
            message: "Please Select Option",
            type : "list",
            choices : ["Cash With Draw","Check Balance"]
       }
    ]
 );
console.log("operation");
if (operationAns.operation === "Cash With Draw") {
    let amountAns = await inquirer.prompt(
        [
            {
                name : "amount",
                message : "Enter Your Amount",
                type : "number"
            }
        ]
    ); 
    myBalance -= amountAns.amount;
    console.log("Your Remaining BAlance is : " + myBalance)
    }else if (operationAns.operation === "Check Balance" ) {
            console.log("My Balance is : " + myBalance)
    }
} else {
    console.log("Incorrect Pin (Please Type Correct Pin)")
};