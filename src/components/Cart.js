import React from 'react';
import '../styles/Cart.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Order from './Order'


const cart = (props) => {








    const burger = props.burger.map(item => {


        function remove() {

            console.log(item.id)

            props.handleDeleteGlobalPrice(item.price, item.id)
        }



        return (

            <div className='order' key={item.id}>

                <p className='details'><strong>{item.name}: </strong> salad x {item.salad} bacon x {item.bacon} cheese x {item.cheese} meat x {item.meat}</p>

                <p className='price'><strong>Price: {item.price.toFixed(2)} $</strong></p>

                <p onClick={remove} className="cancel">X</p>



            </div>
        )

    })


    const isSomethingInCart = props.globalPrice > 0 ? <Link
        onClick={function () {
            document.querySelector('div.summary').style.display = 'none'
        }}
        className="continue" to='/order'>Continue</Link> : <p className="empty">There are currently no orders in your shopping cart.</p>



    return (

        <BrowserRouter>


            <div className="summary">
                {props.globalPrice > 0 ? <h2>Your orders:</h2> : null}


                {burger}


                {props.globalPrice > 0 ? <p className='total-price'>Total price: {props.globalPrice.toFixed(2)} $</p> : null}


                {isSomethingInCart}

            </div>




            <section className="order">

                <Route path='/order' render={() => <Order reset={props.reset} />} />

            </section>


        </BrowserRouter>
    );



}

export default cart;