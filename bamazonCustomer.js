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
	newPrompt();
});