# Chinese_restaurant
List and add products and orders.

The first thing that is rendered on the screen is the table of the products that we have available
in our restaurant.
We find two buttons, one to add products to our table and another to place an order.
If we click on the add product button, a new form appears where we can add the necessary values 
to create a new one and when we click on add product to the table we can see it in the products table
If we click on make an order, a new form appears to add a product to our order, you just have to add
the product number and click on Add to your order. When we do, a new table will appear with the products 
of our order.
After adding all the products to your order, you can click on Promotions for your order and the promotions
that you can obtain depending on what you have ordered will appear.

Our components:
AddProductForm, form to add a new product to our table of available products
AddProductOrder, form to add a new product to our order
MostrarProdPed, component that displays the two tables, the product table and the order table,
Promos, button that calls the logic to see what promotions have been generated
Mostarpromos, component that shows us the promotions
