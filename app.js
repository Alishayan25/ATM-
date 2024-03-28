"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var user = await inquirer_1.default.prompt([
    {
        type: "string",
        name: "cardholdername",
        message: "Welcome Fatima"
    },
    {
        type: "number",
        name: "pinCode",
        message: "enter your 4 digit pinCode",
    },
    // account selection 
    {
        type: "list",
        name: "accountType",
        message: "Select your account type",
        choices: ["current", "saving"]
    },
    //transfer window 
    {
        type: "list",
        name: "transitionType",
        message: "Select your transition type",
        choices: ["cash", "withdraw1"]
    },
    //amount slesction window 
    {
        type: "list",
        name: "amount",
        message: "Select your amount",
        choices: ["2000", "5000", "7000", "20000"],
        when: function (user) {
            return user.transitionType === "cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when: function (user) {
            return user.transitionType === "withdraw1";
        }
    },
]);
//final invoice 
if (user.pinCode) {
    var balance = Math.floor(Math.random() * 1000 + 1);
    console.log(balance);
    var enteramount = user.account;
    if (enteramount <= balance) {
        var remaining = balance - enteramount;
        console.log("you have withdraw rupess ".concat(enteramount, " and you have remaining balance ").concat(remaining));
    }
}
