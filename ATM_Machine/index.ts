#! /usr/bin/env node


//Let's Create ATM Machine

import inquirer from "inquirer";

let Current_Balance : number = 100000;
let Fast_Cash: number = 20000;



console.log("Your Current_Balance is : ", Current_Balance);
let ATM_Machine = await inquirer.prompt([


	{
		name: "info_01",
		type: "list",
		message: "Please Select Your Language ?",
		choices: ["English", "Urdu"],

	},



	{
		name: "info_02",
		type: "number",
		message: "Enter Your Pin_Code ?",
	},

	{
		name: "info_03",
		type: "list",
		message: "Please Select A Transaction ? ",
		choices: ["Cash Withdrawal", "Fast Cash", "Balance Inquiry", "Services", "Pin Change", "Mini Statement"],
	},


    



	{
		name: "info_04",
		type: "number",
		message: "Please Select Amount ?",
	},
    


     

	{
		name: "info_05",
		type: "list",
		message: "Please take your receipt?",
		choices : ["Yes" , "No"],
	},


    
]);

if (ATM_Machine.info_03 == "Cash Withdrawal"  &&  ATM_Machine.info_04 <= Current_Balance) {
	console.log("Thankyou!");
	console.log("Your transaction is successfully completed");
}

else if(ATM_Machine.info_03 == "Fast Cash"  &&  ATM_Machine.info_04 <= Fast_Cash){
	console.log("Thankyou!");
	console.log("Your fast_cash transaction is successfully completed");
}

else{
	console.log("Your amount does'nt match your Current_Balance!");
}


