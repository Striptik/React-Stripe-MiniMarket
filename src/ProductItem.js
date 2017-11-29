import React from 'react';

const styleName = {
    fontSize: 30
};

const styleDescription = {
    fontSize: 15
};

const stylePrice = {
    fontSize: 25
};

export default (props) => {
    return (
        <div 
        className="product" 
        style={{
            display: "inline-block",
            margin: 30,
            padding: 20,
            border: "2px solid #000",
            borderRadius: 20,

        }}>
            <h3 className="product_name" style={styleName}>{props.product.name}</h3>
            <p className="product_desc" style={styleDescription}> description :  {props.product.description}</p>
            <p className="product_price" style={stylePrice}>{props.product.price} €</p>

            <input 
            type="submit" 
            value="Add to Cart" 
            onClick={props.addToCart}
            />
        </div>
    );
};