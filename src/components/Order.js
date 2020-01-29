import React, { Component } from 'react';
import '../styles/Order.css'

class Order extends Component {

    isActive = false;
    nameOk = false;
    emailOk = false;
    numberOk = false;
    adressOk = false;

    state = {
        name: '',
        email: '',
        phone: '',
        adress: '',
    }

    handleInputs = (e) => {
        if (e.target.name === 'name') {
            if (e.target.value.length < 3) {
                e.target.style.backgroundColor = '#FF8787'
                this.nameOk = false;
            } else {
                e.target.style.backgroundColor = '#FFE683';
                this.nameOk = true;
            }
            this.setState({
                name: e.target.value
            })

        } else if (e.target.name === 'email') {
            if (e.target.value.includes('@')) {
                e.target.style.backgroundColor = '#FFE683';
                this.emailOk = true;
            } else {
                e.target.style.backgroundColor = '#FF8787'
                this.emailOk = false;
            }
            this.setState({
                email: e.target.value
            })
        } else if (e.target.name === 'number') {
            if (e.target.value.length > 8 && e.target.value.length <= 13) {
                e.target.style.backgroundColor = '#FFE683';
                this.numberOk = true;
            } else {
                e.target.style.backgroundColor = '#FF8787'
                this.numberOk = false;
            }
            this.setState({
                phone: e.target.value
            })
        } else if (e.target.name === 'adress') {
            if (e.target.value.length >= 5 && e.target.value.length <= 35) {
                e.target.style.backgroundColor = '#FFE683';
                this.adressOk = true;
            } else {
                e.target.style.backgroundColor = '#FF8787'
                this.adressOk = false;
            }
            this.setState({
                adress: e.target.value
            })
        }

        if (this.nameOk && this.adressOk && this.emailOk && this.numberOk) {
            this.isActive = true;
        } else {
            this.isActive = false;
        }
    }

    handleButtonClick = () => {
        document.querySelector('div.contact').style.display = 'none';
        document.querySelector('h1.succesful').style.display = 'block';
        this.props.reset()
    }

    render() {
        const { name, email, phone, adress } = this.state;
        return (
            <>
                <div className='contact'>
                    <h3>Enter your contact data</h3>
                    <input onChange={this.handleInputs} value={name} placeholder="Your Name" name='name' type="text" />
                    <input onChange={this.handleInputs} value={email} placeholder="Your Email" name='email' type="text" />
                    <input onChange={this.handleInputs} value={phone} placeholder="Your Phone Number" name='number' type="number" />
                    <select>
                        <option value="piątkowo">Piątkowo</option>
                        <option value="jeżyce">Jeżyce</option>
                        <option value="rataje">Rataje</option>
                        <option value="ogrody">Ogrody</option>
                        <option value="winiary">Winiary</option>
                    </select>
                    <input onChange={this.handleInputs} value={adress} placeholder='Your Adress' name='adress' type="text" />
                    <button
                        disabled={this.isActive ? false : true}
                        onClick={this.handleButtonClick}
                        className='send'>Send Order
                    </button>
                </div>
                <h1 className='succesful'>Your order has been sent ;)</h1>
            </>
        );
    }
}

export default Order;