var mysql = require("mysql");
var inquirer = require("inquirer");
var fs = require("fs");


/* Connect to the server and do a read file? to display data */ 

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazonDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    readProducts();
  });
  
  function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }

inquirer
    .prompt([
        {
            name: "product id",
            message: "What is the ID of the product you'd like to purchase?",
            type: "input",
        },
        {
            name: "product quantity",
            message: "How many would you like to purchase?",
            type: "input"
        }
    ]).then(function(){
        
    })