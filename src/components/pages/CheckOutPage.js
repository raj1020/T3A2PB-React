import React from 'react'
import CheckOut from './CheckOut'

const CheckOutPage =()=> {

    const myStyle = {
    
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
    return (
        <div style={myStyle}>
            <CheckOut />
        </div>
    )
}


export default CheckOutPage