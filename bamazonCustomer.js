//required npm packages: make sure you install in your node;
var mysql = require("mysql");
var inquirer = require ("inquirer");
const EventEmitter = require('events').EventEmitter.defaultMaxListeners = Infinity;

//MySQL Connection
//=====================================================
var connection = mysql.createConnection({
	host:"localhost",
	port:3306,

	user:"root",
	password: "",
	database: "bamazon_DB"
});

//Welcome Message
console.log("=========================  Welcome to Bamazon    ========================");
console.log("=========================  Home of The Bamazon   ========================");
console.log("========================= Can I Take Your Order? ========================");

//Connecting MySQL
connection.connect(function(err){
	if(err) throw err;
});

//Displaying All Our Current and Showing The Respective ID, Name, and Price;
connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
        
    }
    console.log("==============================================");
    start();

});

// function that prompts with two messages: ID of product liked to purchase, how many units


var start = function(){
	connection.query("SELECT * FROM products", function(err, res){
		for(var i = 0; i<res.length; i++){
			console.log("ID: " + res[i].id + "| Product: " + res[i].product_name + "| Price: " + res[i].price + "| Stock: " +res[i].stock_quantity); 
		}
		inquirer.prompt({
			name: "choice",
			type: "rawlist",
			message: "Please Select The Item You Would Like To Purchase",
			choices: function(value){
				var choiceArray = [];
				for(var i = 0; i<res.length; i++){
					choiceArray.push(res[i].product_name);
				}
				return choiceArray;
			}
		}).then(function(answer){
			for(var i = 0; i<res.length; i++){
				if(res[i].product_name === answer.choice){
					var chosenItem = res[i];
					inquirer.prompt({
						name:"quantity",
						type: "input",
						message: "Coolio, Now How Many?"
					}).then(function(answer){
						if(chosenItem.stock_quantity>answer.quantity){
							var diffStock= chosenItem.stock_quantity - answer.quantity;
							connection.query("UPDATE products SET ? Where ?", [{
								stock_quantity: diffStock
							}, {
								id:chosenItem.id
							}], function(err,res){
								console.log("====================================")
								console.log("Purchase Made");
								console.log("====================================")
								start();
							});

						} else{
							console.log("====================================")
							console.log("SORRY, We Don't Have Enough");
							console.log("====================================")
							start();
						}
					})
				}
			}
		})
	});
}
// var start = function (){
// 	connection.query("SELECT * FROM products", function(err, res){
// 		for (var i = 0; i < res.length; i++) {
// 			console.log("-----------------------------------------------------------------");  	
//             console.log("ID: " + res[i].id + " |  Product: " + res[i].product_name + " |  Price: " + res[i].price);
            
//     }

// 	inquirer.prompt({
//             name: "choice",
//             type: "rawlist",
//             choices: function(value) {
//                 var choiceArray = [];
//                 for (var i = 0; i < res.length; i++) {
//                     choiceArray.push(res[i].product_name);
//                 }
//                 return choiceArray;
//             },
//             message: "Please select the item you'd like to purchase."
// 		}).then(function(answer){
// 			for(var i = 0; i<res.length;i++){
// 				if(res[i].product_id === answer.choice){
// 					var chosenItem = res[i];
// 					inquirer.prompt({
// 						name: "quantity",
// 						type:"input",
// 						message: "How many units would you like to purchase?"
// 					}).then(function(answer){
// 						if(chosenItem.stock_quantity>parseInt(answer.numberOfUnits)){
// 							connection.query("UPDATE products SET ? WHERE ?", [{
// 								stock_quantity: answer_numberOfUnits
// 							},{
// 								id:chosenItem.id
// 							}], function(err,res){
// 								console.log("PURCHASED");
// 								start();
// 							});
// 						} else{
// 							console.log("Sorry, we don't have the inventory for that");
// 							start();
// 						}
// 					});
// 				}
// 			}
// 		});
// 	});
	
// }

