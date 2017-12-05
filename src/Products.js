import React, { Component } from 'react';
import CartIcon from 'react-icons/lib/fa/cart-arrow-down'


import ProductItem from './ProductItem';
import Checkout from './Checkout';


const products = [
    {
        name: 'Stripe TUTO',
        description: 'Livre pour apprendre Stripe',
        price: 15
    },
    {
        name: 'React learning',
        description: 'Livre d\'apprentissage de React',
        price: 20
    },
    {
        name: 'Le JS pour les nuls',
        description: 'Book for learning React',
        price: 20
    },
    {
        name: 'UE Boom 2',
        description: 'Enceintes Ultimate Ears, autonomie 20h, 20W',
        price: 149
    },
    {
        name: 'Polaroid Snap ',
        description: 'Polaroid Photo instantanée',
        price: 139
    },
    {
        name: 'GO Pro Hero 4',
        description: 'Go Pro edition 4, wifi, 4k autonomie 20h',
        price: 400
    },
    {
        name: 'PS4 Pro 1t + GTA V',
        description: 'Book for learning Stripe',
        price: 370
    },
    {
        name: 'Ecran Samsung HD 27"',
        description: 'Ecran PC 2xHDMI 27", 75 Hz',
        price: 299
    },
    {
        name: 'Enceintes Boose AcoustiMass',
        description: 'Systeme 5.1 DTS, 200W, 3D ready',
        price: 499
    },
    {
        name: 'TV 55" Sony',
        description: 'Television OLED 8K UHD 3D 8160 x 8160p ',
        price: 2000
    },
    {
        name: 'TV 49" LG',
        description: 'Televiseur UHD LG, 6 HDMI, ...',
        price: 1400
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
            <div className="productList" style={{ marginTop: 50, marginBottom: 100 }}>
                {this.state.products.map((prod, i) => {
                    return (
                        <ProductItem product={prod} addToCart={this.addToCart.bind(this, i)} key={i} />
                    );
                })}

                {this.state.cart.added.length > 0 ?
                    <div className="displayCart" style={styleDisplayCart}>
                        <CartIcon style={{ paddingRight: 40 }} size={70} />
                        {this.state.cart.added.length} produit(s) ,   total  {this.state.cart.total} €

                        <input
                            type="submit"
                            value="Voir le panier"
                            onClick={this.changePage.bind(this)}
                            style={{
                                backgroundColor: 'orange',
                                border: 'orange 1px solid',
                                margin: 25,
                                fontSize: 20,
                                padding: 10,
                            }}
                        />


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
            <div className="basket" style={{ marginTop: 70 }} >

                <p style={{ fontSize: 20 }}>Votre liste de produits</p>

                <ul style={{ listStyleType: 'none', paddingRight: 30 }}>
                    {this.state.cart.added.map((item, i) => {
                        return <li key={i}>{item.name} : {item.price} €</li>
                    })}
                </ul>
                <p style={{ color: '#ffa500', fontSize: 30 }}> TOTAL : {this.state.cart.total} €</p>

                <input
                    style={{ backgroundColor: '#ffa500' }}
                    type="submit"
                    value="Continuer le Shopping"
                    onClick={this.changePage.bind(this)}
                />

                <Checkout
                    description="Liste d'achat Mini-Market"
                    amount={this.state.cart.total}
                />
            </div>
        );

    }

    render() {

        const styleHeader = {
            display: "block",
            borderBottom: "3px solid #000",
            fontSize: 50,
            position: "fixed",
            top: 0,
            width: "100%",
            backgroundColor: '#ffa500',
            zIndex: 999,
            margin: '0 0',
        }

        return (
            <div style={{ marginBottom: 50 }}>
                <div className="header">
                    <h1 style={styleHeader}> Mini Market</h1>
                </div>


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