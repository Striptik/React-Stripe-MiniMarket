import React from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

//# To remove from this file

const STRIPE_PUB_KEY = 'pk_test_3p3QjTXo9jI4oVF16QLY4Rt1';
const STRIPE_SECRET_KEY = 'sk_test_pRwN5L3oUPWkAsH1kzhqEYrH';
const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'? 'http://myapidomain.com': 'http://localhost:3000';


// Usage with REACT-STRIPE-CHECKOUT

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
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

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={fromEuroToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUB_KEY}
  />

export default Checkout;