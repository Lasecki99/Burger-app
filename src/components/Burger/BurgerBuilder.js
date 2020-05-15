import React from 'react';
import '../../styles/Burger/BurgerBuilder.css';

const burgerBuilder = ({ totalPrice, addToCart, remove, disabled, add }) => {
  return (
    <div className="options">
      <p className="price">
        Current price: <strong>{totalPrice.toFixed(2)} $</strong>
      </p>
      <button
        disabled={totalPrice === 4 ? true : false}
        className="add"
        onClick={addToCart}
      >
        Add to cart
      </button>
      <p className="ingredients">Meat </p>
      <p className="ingredients">Cheese</p>
      <p className="ingredients">Salad </p>
      <p className="ingredients">Bacon </p>
      <div className="buttons">
        <button
          disabled={disabled.meat ? false : true}
          onClick={() => remove('meat')}
        >
          -
        </button>{' '}
        <button onClick={() => add('meat')}>+</button>
        <button
          disabled={disabled.cheese ? false : true}
          onClick={() => remove('cheese')}
        >
          -
        </button>{' '}
        <button onClick={() => add('cheese')}>+</button>
        <button
          disabled={disabled.salad ? false : true}
          onClick={() => remove('salad')}
        >
          -
        </button>{' '}
        <button onClick={() => add('salad')}>+</button>
        <button
          disabled={disabled.bacon ? false : true}
          onClick={() => remove('bacon')}
        >
          -
        </button>{' '}
        <button onClick={() => add('bacon')}>+</button>
      </div>
    </div>
  );
};

export default burgerBuilder;
