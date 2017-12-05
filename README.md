
# Mini Market




The purpose of this project was to test Stripe integration and payment form creation with react.


It's a simple list of articles, you can add to your basket and proceed to a payment

-------



### Download and launch the project 

At first, download the project

``` git clone  https://github.com/Striptik/React-Stripe-MiniMarket.git ```

Then, you can install dependencies

``` yarn install  || npm install ```

Next, just start it


``` npm start || yarn start ```



------


### Description

The interface is really minimalist, and the products are static.

![Mini Market](https://i.imgur.com/JfXiRSV.png)

If you add a product to the cart, you can see it at the bottom of the page. You also have a button to access to your basket.


![Preview Basket](https://i.imgur.com/DIVpPtu.png)


On the basket page, there's a summary of the product added, the total amount.
You can also continue the shopping and come back to the product list page, or proceed to the payment

![Basket Page](https://i.imgur.com/7nXaxul.png)


For the payment, you can choose between Card and Bitcoin methods, and you have to enter some personnal informations

![Payment first step](https://i.imgur.com/Bq3RvEi.png)


Finally, you can paid entering your card informations

![Payment card step](https://i.imgur.com/lJaiWpq.png)



This project was bootstrapped with Create React App. 
The integration of stripe is made with react-stripe-checkout.


