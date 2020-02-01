import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import './../../styles/index.css';

class BillingAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billingAddress1:'',
            billingTwo: '',
            billingSuburb:'',
            billingState: '',
            billingPostcode: ''
          };


        //   componentDidMount() {
        //     console.log(this.props.items);
        // }
      
        handleInputChange(event) {
          const target = event.target;
          const value = target.value;
          const name = target.name;
      
          this.setState({
            [name]: value
          });
        }


        render() {
            return (
              <div className="formContainer">
                <Form>
                <Form.Group>
                    <Form.Label className="formHeading">
                    Billing Address:
                    </Form.Label>
                </Form.Group>
                    <Form.Group className="inputBox">
                        <Form.Label>
                            Billing Address line 1:
                            <Form.Control
                                className="inputBox"
                                name="billingAddress1"
                                type="text"
                                value={this.state.billingAddress1}
                                onChange={this.handleInputChange} />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="inputBox">
                        <Form.Label>
                            Billing Address line 2:
                            <Form.Control
                                className="inputBox"
                                name="billingAddress2"
                                type="text"
                                value={this.state.billingAddress2}
                                onChange={this.handleInputChange} />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="inputBox">
                        <Form.Label>
                            Billing Suburb:
                            <Form.Control
                                className="inputBox"
                                name="billingSuburb"
                                type="text"
                                value={this.state.billingSuburb}
                                onChange={this.handleInputChange} />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="inputBox">
                        <Form.Label>
                            Billing State:
                            <Form.Control
                                className="inputBox"
                                name="billingState"
                                type="text"
                                value={this.state.billingState}
                                onChange={this.handleInputChange} />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className="inputBox">
                        <Form.Label>
                            Billing Postcode:
                            <Form.Control
                                className="inputBox"
                                name="billingPostcode"
                                type="text"
                                value={this.state.billingPostcode}
                                onChange={this.handleInputChange} />
                        </Form.Label>
                    </Form.Group>



                    </Form>




};

export default connect(mapStateToProps)(BillingAddress);