import React, { Component } from 'react';
import '../styles/Order.css';

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
  };

  handleInputs = e => {
    const name = e.target.name;
    const value = e.target.value;
    const targetStyle = e.target.style;

    if (name === 'name') {
      if (value.length < 3) {
        targetStyle.backgroundColor = '#FF8787';
        this.nameOk = false;
      } else {
        targetStyle.backgroundColor = '#FFE683';
        this.nameOk = true;
      }
      this.setState({
        name: value,
      });
    } else if (name === 'email') {
      if (value.includes('@')) {
        targetStyle.backgroundColor = '#FFE683';
        this.emailOk = true;
      } else {
        targetStyle.backgroundColor = '#FF8787';
        this.emailOk = false;
      }
      this.setState({
        email: value,
      });
    } else if (name === 'number') {
      if (value.length > 8 && value.length <= 13) {
        targetStyle.backgroundColor = '#FFE683';
        this.numberOk = true;
      } else {
        targetStyle.backgroundColor = '#FF8787';
        this.numberOk = false;
      }
      this.setState({
        phone: value,
      });
    } else if (name === 'adress') {
      if (value.length >= 5 && value.length <= 35) {
        targetStyle.backgroundColor = '#FFE683';
        this.adressOk = true;
      } else {
        targetStyle.backgroundColor = '#FF8787';
        this.adressOk = false;
      }
      this.setState({
        adress: value,
      });
    }

    if (this.nameOk && this.adressOk && this.emailOk && this.numberOk) {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  };

  handleButtonClick = () => {
    document.querySelector('div.contact').style.display = 'none';
    document.querySelector('h1.succesful').style.display = 'block';
    this.props.reset();
  };

  render() {
    const { name, email, phone, adress } = this.state;
    return (
      <>
        <div className="contact">
          <h3>Enter your contact data</h3>
          <input
            onChange={this.handleInputs}
            value={name}
            placeholder="Your Name"
            name="name"
            type="text"
          />
          <input
            onChange={this.handleInputs}
            value={email}
            placeholder="Your Email"
            name="email"
            type="text"
          />
          <input
            onChange={this.handleInputs}
            value={phone}
            placeholder="Your Phone Number"
            name="number"
            type="number"
          />
          <select>
            <option value="piątkowo">Piątkowo</option>
            <option value="jeżyce">Jeżyce</option>
            <option value="rataje">Rataje</option>
            <option value="ogrody">Ogrody</option>
            <option value="winiary">Winiary</option>
          </select>
          <input
            onChange={this.handleInputs}
            value={adress}
            placeholder="Your Adress"
            name="adress"
            type="text"
          />
          <button
            disabled={this.isActive ? false : true}
            onClick={this.handleButtonClick}
            className="send"
          >
            Send Order
          </button>
        </div>
        <h1 className="succesful">Your order has been sent ;)</h1>
      </>
    );
  }
}

export default Order;
