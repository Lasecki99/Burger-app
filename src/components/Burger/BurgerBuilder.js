import React from 'react';
import '../../styles/Burger/BurgerBuilder.css'

const burgerBuilder = (props) => {






    return (

        <div className="options">
            <p className='price'>Current price: <strong>{props.totalPrice.toFixed(2)} $</strong></p>

            <button disabled={props.totalPrice === 4 ? true : false} className="add" onClick={props.addToCart} >Add to cart</button>

            <p className='ingredients'>Meat </p>
            <p className='ingredients'>Cheese</p>

            <p className='ingredients'>Salad </p>

            <p className='ingredients'>Bacon </p>


            <div className="buttons">
                <button disabled={props.disabled.meat ? false : true} onClick={() => props.remove('meat')}>-</button> <button onClick={() => props.add('meat')}>+</button>

                <button disabled={props.disabled.cheese ? false : true} onClick={() => props.remove('cheese')}>-</button> <button onClick={() => props.add('cheese')} >+</button >

                <button disabled={props.disabled.salad ? false : true} onClick={() => props.remove('salad')}>-</button> <button onClick={() => props.add('salad')}>+</button>

                <button disabled={props.disabled.bacon ? false : true} onClick={() => props.remove('bacon')}>-</button> <button onClick={() => props.add('bacon')}>+</button>


            </div>

        </div>
    );
}

export default burgerBuilder;