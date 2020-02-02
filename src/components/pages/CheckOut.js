import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Cart from './Cart';
import Checkout from './../stripe/checkout';
import './../../styles/index.css';


class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: "William",
          lastName: "Smith",
          email: "email@example.com",
          confirmEmail: 'email@example.com',
          phone: '',
          addressOne: '',
          addressTwo: '',
          suburb: '',
          state: '',
          postcode: '',
            
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
      }

      componentDidMount() {
          console.log(this.props, this.state);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    
      render() {
        return (
        <div>
          <div className="formContainer">
            <Form className="checkoutForm">
                <Form.Group>
                    <Form.Label className="formHeading">
                    Contact Details:
                    </Form.Label>
                </Form.Group>
                    <Form.Group className="inputBox">
                        <Form.Label>
                            First Name:
                            <Form.Control
                                className="inputBox"
                                name="firstName"
                                type="text"
                                value={this.state.firstname}
                                onChange={this.handleInputChange} />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Last Name:
                            <Form.Control
                                className="inputBox"    
                                name="lastName"
                                type="text"
                                value={this.state.lastname}
                                onChange={this.handleInputChange} />
                        </Form.Label>
                    </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        Email:
                        <Form.Control
                            className="inputBox"
                            name="email"
                            type="email"
                            value={this.state.lastname}
                            onChange={this.handleInputChange} />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Confirm Email:
                        <Form.Control
                            className="inputBox"
                            name="confirmEmail"
                            type="email"
                            value={this.state.lastname}
                            onChange={this.handleInputChange} />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Phone:
                        <Form.Control
                            className="inputBox"
                            name="phone"
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleInputChange} />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="formHeading">
                    Delivery Address:
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Address line 1*:
                        <Form.Control
                            className="inputBox"
                            name="addressOne"
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleInputChange} />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Address line 2:
                        <Form.Control
                            className="inputBox"
                            name="addressTwo"
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleInputChange} />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Suburb:
                        <Form.Control
                            className="inputBox"
                            name="suburb"
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleInputChange} />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        State:
                        <Form.Control
                            className="inputBox"
                            name="state"
                            type="text"
                            value={this.state.lastname}
                            onChange={this.handleInputChange} />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Postcode:
                        <Form.Control
                            className="inputBox"
                            name="postcode"
                            type="number"
                            value={this.state.lastname}
                            onChange={this.handleInputChange} />
                    </Form.Label>
                </Form.Group>
                
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                            className="inputBox"
                            name="billingAddress"
                            type="checkbox"
                            label="My billing address is different to my delivery address"
                            checked={this.state.billingaddress}
                            onChange={this.handleInputChange} />
                    </Form.Group>
                    {/* <Form.Control className="inputBox" type="submit" value="Continue to Payment" /> */}
            </Form>
          </div>
          <div className="orderContainer">
            <Cart />
            {/* <Form>
                <Form.Control className="paymentButton" type="submit" value="Continue to Payment" />
            </Form> */}
            <Checkout />
          </div>
          </div>
        );
      }
  }
  
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
        //addedItems: state.addedItems
    }
}

  export default connect(mapStateToProps)(CheckOut);