import React, { Component } from 'react';
import CartIcon from 'react-icons/lib/fa/cart-arrow-down'


import ProductItem from './ProductItem';
import Checkout from './Checkout';

const products = [
    {
        name: 'Stripe learning',
        description: 'Book for learning Stripe',
        price: 15
    },
    {
        name: 'React learning',
        description: 'Book for learning React',
        price: 20
    },
    {
        name: 'TV 55" Sony',
        description: 'Television OLED 8K UHD 3D 8160 x 8160p ',
        price: 2000
    },
    {
        name: 'Stripe learning',
        description: 'Book for learning Stripe',
        price: 15
    },
    {
        name: 'React learning',
        description: 'Book for learning React',
        price: 20
    },
    {
        name: 'TV 55" Sony',
        description: 'Television OLED 8K UHD 3D 8160 x 8160p ',
        price: 2000
    },
];

class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products,
            cart: {
                total: 0,
                added: [],
            },
            displayCart: false
        };

    }

    addToCart(i, e) {

        const item = this.state.products[i];

        let total = this.state.cart.total
        total += item.price

        let added = [...this.state.cart.added]
        added.unshift(item)

        let cart = { total, added }

        this.setState({
            cart
        })
    }

    changePage() {
        this.setState({
            displayCart: !this.state.displayCart
        });
    }

    renderProducts() {
        const styleDisplayCart = {
            display: "block",
            borderTop: "1px solid #000",
            fontSize: 20,
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: "white",
            zIndex: 999
        }

        return (
            <div className="productList">
                {this.state.products.map((prod, i) => {
                    return (
                        <ProductItem product={prod} addToCart={this.addToCart.bind(this, i)} key={i} />
                    );
                })}

                {this.state.cart.added.length > 0 ?
                    <div className="displayCart" style={styleDisplayCart}>
                        <CartIcon style={{ paddingRight: 40 }} size={70} />
                        {this.state.cart.added.length} product ,   total  {this.state.cart.total} €

                        <input
                            type="submit"
                            value="Go To Cart"
                            onClick={this.changePage.bind(this)}
                            style={{
                                backgroundColor: 'orange',
                                border: 'orange 1px solid',
                                margin: 25,
                                fontSize: 20,
                                padding: 10,
                            }}
                        />

                        {/* <Checkout
                            name={'The Road to learn React'}
                            description={'Only the Book'}
                            amount={1}
                        /> */}
                    </div>
                    :
                    null
                }

            </div>
        );
    }

    renderBasket() {
        // Button to come back to renderProduct 
        return (
            <div className="basket">
                <input 
                    type="submit" 
                    value="Continue Shopping" 
                    onClick={this.changePage.bind(this)} 
                />
                    
                <ul style={{ listStyleType: 'none' }}>
                    {this.state.cart.added.map((item, i) => {
                        return <li>{item.name} : {item.price} €</li>
                    })}
                </ul>
                <p> TOTAL : {this.state.cart.total} €</p>
            </div>
        );

    }

    render() {

        return (
            <div style={{ marginBottom: 50 }}>

                <h1 style={{ fontSize: 50 }}> Mini Market</h1>

                {!this.state.displayCart ?
                    this.renderProducts()
                    :
                    this.renderBasket()
                }
            </div>
        );
    }

}

export default Products;