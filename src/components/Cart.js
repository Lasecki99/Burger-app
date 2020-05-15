import React from 'react';
import '../styles/Cart.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Order from './Order';

const cart = props => {
  const burger = props.burger.map(
    ({ id, price, cheese, meat, bacon, salad, name }) => {
      const remove = () => {
        props.handleDeleteGlobalPrice(price, id);
      };

      return (
        <div className="order" key={id}>
          <p className="details">
            <strong>{name}: </strong> salad x {salad} bacon x {bacon} cheese x{' '}
            {cheese} meat x {meat}
          </p>
          <p className="price">
            <strong>Price: {price.toFixed(2)} $</strong>
          </p>
          <p onClick={remove} className="cancel">
            X
          </p>
        </div>
      );
    }
  );

  const isSomethingInCart =
    props.globalPrice > 0 ? (
      <Link
        onClick={() =>
          (document.querySelector('div.summary').style.display = 'none')
        }
        className="continue"
        to="/order"
      >
        Continue
      </Link>
    ) : (
      <p className="empty">
        There are currently no orders in your shopping cart.
      </p>
    );
  return (
    <BrowserRouter>
      <div className="summary">
        {props.globalPrice > 0 ? <h2>Your orders:</h2> : null}
        {burger}
        {props.globalPrice > 0 ? (
          <p className="total-price">
            Total price: {props.globalPrice.toFixed(2)} $
          </p>
        ) : null}
        {isSomethingInCart}
      </div>
      <section className="order">
        <Route path="/order" render={() => <Order reset={props.reset} />} />
      </section>
    </BrowserRouter>
  );
};

export default cart;
