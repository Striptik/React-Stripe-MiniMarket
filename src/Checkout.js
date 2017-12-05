import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

//# To remove from this file

const STRIPE_PUB_KEY = 'pk_test_3p3QjTXo9jI4oVF16QLY4Rt1';
const PAYMENT_SERVER_URL = 'http://localhost:3000';  // To change if one day be in production mode


// Usage with REACT-STRIPE-CHECKOUT

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Successful');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ amount, description }) => {
  
return (<StripeCheckout
    name="Mini Market Paiement"
    description={description}
    amount={fromEuroToCent(amount)}
    panelLabel="Payer"
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUB_KEY}
    allowRememberMe
    bitcoin
    shippingAddress
  >
    <button style={{backgroundColor: '#ffa500'}}>
      Payer par carte bleue
    </button>
  </StripeCheckout>);
}

export default Checkout;