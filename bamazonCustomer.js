var mysql = require("mysql");
var inquire = require ("inquirer")
var connection = mysql.createConnection({
	host:"localhost",
	port:3306,

	user:"root",
	password: "",
	database: "bamazon_DB"
});

connection.connect(function(err){
	if(err) throw err;
	console.log("connected as id " + connection.threadID);
	showAll();
});

//function that shows all products available
function showAll(){
	connection.query('SELECT id, product_name, price FROM products',function(err,rows){
		console.log(rows)
	});
}

//function that prompts with two messages: ID of product liked to purchase, how many units
function newPurchasePrompt(){
	inquirer.prompt(
		{
			name: "productID",
			type:"input",
			message: "What is the ID of the product you wish to purchase?"
		},
		{
			name: "numberOfUnits",
			type:"input",
			message: "How many units would you like to purchase?"
		},

	)
}
