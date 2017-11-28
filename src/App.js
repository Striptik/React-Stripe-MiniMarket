import React, { Component } from 'react';
// import logo from './logo.svg';
import Checkout from './Checkout'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}

        <h1> Mini Market</h1>
        <Checkout
            name={'The Road to learn React'}
            description={'Only the Book'}
            amount={1}
          />
      </div>
    );
  }
}

console.log(process.env);

export default App;
