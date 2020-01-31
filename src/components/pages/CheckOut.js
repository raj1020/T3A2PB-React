import React, { Component } from 'react';
import { connect } from 'react-redux';

class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: "William",
          middleName: "John",
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
          <form>
            
            <div>
            
                <label>
                    First Name:
                    <input
                        name="firstName"
                        type="text"
                        value={this.state.firstname}
                        onChange={this.handleInputChange} />
                </label>
            </div>
            <div>
            
                <label>
                    Middle Name:
                    <input
                        name="middleName"
                        type="text"
                        value={this.state.middlename}
                        onChange={this.handleInputChange} />
                </label>
            </div>
            <div>
            
                <label>
                    Last Name:
                    <input
                        name="lastName"
                        type="text"
                        value={this.state.lastname}
                        onChange={this.handleInputChange} />
                </label>
            </div>
            <div>
            
            <label>
                Email:
                <input
                    name="email"
                    type="email"
                    value={this.state.lastname}
                    onChange={this.handleInputChange} />
            </label>
        </div>
        <div>
            <label>
                Confirm Email:
                <input
                    name="confirmEmail"
                    type="email"
                    value={this.state.lastname}
                    onChange={this.handleInputChange} />
            </label>
        </div>
        <div>
            <label>
                Phone:
                <input
                    name="phone"
                    type="text"
                    value={this.state.lastname}
                    onChange={this.handleInputChange} />
            </label>
        </div>
        <div>
            <label>
               Delivery Address:
            </label>
        </div>
        <div>
            <label>
                Address line 1*:
                <input
                    name="addressOne"
                    type="text"
                    value={this.state.lastname}
                    onChange={this.handleInputChange} />
            </label>
        </div>
        <div>
            <label>
                Address line 2:
                <input
                    name="addressTwo"
                    type="text"
                    value={this.state.lastname}
                    onChange={this.handleInputChange} />
            </label>
        </div>
        <div>
            <label>
                Suburb:
                <input
                    name="suburb"
                    type="text"
                    value={this.state.lastname}
                    onChange={this.handleInputChange} />
            </label>
        </div>
        <div>
            <label>
                State:
                <input
                    name="state"
                    type="text"
                    value={this.state.lastname}
                    onChange={this.handleInputChange} />
            </label>
        </div>
        <div>
            <label>
                Postcode:
                <input
                    name="postcode"
                    type="number"
                    value={this.state.lastname}
                    onChange={this.handleInputChange} />
            </label>
        </div>
        
            <div>
                <label>
                Please check if your billing address is different:
                <input
                    name="billingAddress"
                    type="checkbox"
                    checked={this.state.billingaddress}
                    onChange={this.handleInputChange} />
                </label>
            </div>
            <input type="submit" value="Submit" />
            <p>{console.log(this.state, this.props)}</p>
          </form>
        );
      }
  }
  
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}

  export default connect(mapStateToProps)(CheckOut);