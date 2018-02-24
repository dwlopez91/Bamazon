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
    readProducts();
  });
  
  function readProducts() {
    connection.query("SELECT id, product_name, price FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log("Item ID: " + res[i].id + ", " + "Product: " + res[i].product_name + ", " + "Price: $" + res[i].price);
      }
      console.log("-----------------------------------");
  
      promptPurchase();
    });
  }

function promptPurchase() {
  inquirer
    .prompt([
        {
            name: "product_id",
            message: "What is the ID of the product you'd like to purchase?",
            type: "input",
        },
        {
            name: "quantity",
            message: "How much would you like to purchase?",
            type: "input"
        }
    ]).then(function(answer) {
        connection.query('SELECT * FROM products WHERE id = ?', [answer.product_id], function(err, res){
            //console.log(res[0].stock_quantity);
            //console.log(answer.quantity);
             if(answer.quantity > res[0].stock_quantity){
             console.log('Sorry! Not enough in stock. Try again.');  
             promptPurchase();
            }
            else {
                console.log("Your total is $" + res[0].price * answer.quantity);
                connection.query('UPDATE products SET ? Where ?', [{
                    stock_quantity: res[0].stock_quantity - answer.quantity
                },{
                    id: answer.product_id
                }])
            }
        })
        newPurchase();
    }); 
}

function newPurchase (){
    inquirer
        .prompt([
            {
                name: "new",
                message: "would you like to make another purchase?",
                type: "confirm"
            }
        ]).then(function(answer){
            if (answer.new = true) {
                promptPurchase();
            }
            else {
                console.log("Thank you for visiting! Come again.");
                connection.end();
            }
        })
}

// the else "thank you for coming! ... doesn't work"
// the prompt newPurchase for some reason pops up too soon ... 
// need to add pics to README