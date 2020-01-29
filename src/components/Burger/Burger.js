import React, { Component } from 'react';
import classes from '../../styles/Burger/Burger.module.css'
import BurgerIngredient from './BurgerIngredient'
import BurgerBuilder from './BurgerBuilder'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class Burger extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4.00,
        cart: [],
    }

    addIngredientHandle = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        })
    }

    handleAddCart = () => {
        // Kopia w ten sposób ponieważ trzeba wyświetlić price w komponencie Cart

        const copyIngriedents = {
            id: this.props.counter,
            salad: this.state.ingredients.salad,
            bacon: this.state.ingredients.bacon,
            cheese: this.state.ingredients.cheese,
            meat: this.state.ingredients.meat,
            price: this.state.totalPrice,
            name: 'Burger'
        }

        this.setState((prevState) => ({
            cart: [...prevState.cart, copyIngriedents]
        }))

        this.setState({
            totalPrice: 4,
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
        })

        this.props.handleGlobalPrice(this.state.totalPrice)
        this.props.handleCounter()
    }

    componentDidUpdate(prevProps, prevState) {
        // Przekazanie propsów do komponentu App
        if (this.state.cart !== prevState.cart) {
            this.props.handlePropsBurger(this.state.cart)
        }
    }

    render() {

        let transformedIngredients = Object.keys(this.state.ingredients).map(igKey => {
            return [...Array(this.state.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }

        return (
            <>
                <div className={classes.Burger}>
                    <BurgerIngredient type="bread-top" />
                    {transformedIngredients}
                    <BurgerIngredient type="bread-bottom" />
                </div>

                <section className={classes.Options}>
                    <BurgerBuilder
                        addToCart={this.handleAddCart}
                        ingredients={transformedIngredients}
                        add={this.addIngredientHandle}
                        totalPrice={this.state.totalPrice}
                        remove={this.removeIngredientHandler}
                        disabled={this.state.ingredients}
                    />
                </section>
            </>
        )
    }
}
export default Burger;