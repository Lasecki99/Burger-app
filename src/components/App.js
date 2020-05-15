import React, { Component } from 'react';
import '../styles/App.css';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Burger from './Burger/Burger';
import Cart from './Cart';
import axios from '../axios';

class App extends Component {
  state = {
    cart: [],
    globalPrice: 0,
    counter: 0,
    loading: false,
  };

  handlePropsBurger = cartArr => {
    const index = cartArr.length - 1;
    const cart = cartArr.splice(index, 1);
    this.setState(prevState => ({
      cart: prevState.cart.concat(cart),
    }));
  };

  handleGlobalPrice = price => {
    this.setState(prevState => ({
      globalPrice: prevState.globalPrice + price,
    }));
  };

  handleDeleteGlobalPrice = (price, id) => {
    const arr = [...this.state.cart];
    const index = arr.findIndex(item => item.id === id);
    arr.splice(index, 1);
    this.setState({
      globalPrice: this.state.globalPrice - price,
      cart: arr,
    });
  };

  handleCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  };

  handleResetOrder = async () => {
    const order = {
      burger: this.state.cart,
    };
    try {
      await axios.post('/orders.json', order);
    } catch (err) {
      console.log(err);
    }
    this.setState({
      cart: [],
      globalPrice: 0,
    });
  };

  handleCloseNavigation = () => {
    document.querySelector('nav').classList.remove('active');
    document.querySelector('i.fa-bars').classList.remove('hide');
  };

  handleOpenNavigation = () => {
    document.querySelector('nav').classList.add('active');
    document.querySelector('i.fa-bars').classList.add('hide');
  };

  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/burger">Build Burger</NavLink>
            </li>
            {/* Wkrótce */}
            {/* <li>   <NavLink to="/pizza">Build Pizza</NavLink></li>
                  <li>  <NavLink to="/hotdog">Build Hot dog</NavLink></li> */}
          </ul>
          <i onClick={this.handleOpenNavigation} className="fas fa-bars"></i>
          <i onClick={this.handleCloseNavigation} className="fas fa-times"></i>
          <NavLink to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <div className="items-number">
              <p>{this.state.cart.length}</p>
            </div>
          </NavLink>
        </nav>
        <main onClick={this.handleCloseNavigation}>
          <Switch>
            <Route
              path="/cart"
              exact
              render={() => (
                <Cart
                  burger={this.state.cart}
                  globalPrice={this.state.globalPrice}
                  handleDeleteGlobalPrice={this.handleDeleteGlobalPrice}
                  counter={this.state.counter}
                  reset={this.handleResetOrder}
                />
              )}
            />
            <Route
              path="/"
              render={() => (
                <Burger
                  handleGlobalPrice={this.handleGlobalPrice}
                  handlePropsBurger={this.handlePropsBurger}
                  counter={this.state.counter}
                  handleCounter={this.handleCounter}
                />
              )}
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
export default App;
