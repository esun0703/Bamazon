# Bamazon
An Amazon-like storefront app with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory. 
# Get Started
  1. MySQL Database called Bamazon
  2. create a Table inside of that database called products.
      * The products table should have each of the following columns:
        1. item_id (unique id for each product)
        2. product_name (Name of product)
        3. department_name
        4. price (cost to customer)
        5. stock_quantity (how much of the product is available in stores)
 3. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
 4. Run BamazonCustomer.js
 5. The app should then prompt users with two messages.
    1. The first should ask them the ID of the product they would like to buy.
    2. The second message should ask how many units of the product they would like to buy.
6. If store does have enough of the product, app should fulfill the customer's order.
    1. This means updating the SQL database to reflect the remaining quantity.
    2. Once the update goes through, show the customer the total cost of their purchase.
# Built With
  1. MySQL
  2. JavaScript
  3. JQuery
  4. Node.js
# Author
Emily Sun




