import React from 'react';


class ShowProduct extends React.Component {

    componentDidMount() {
        console.log(this.props);
    }

    render () {
        return <h1>Here I show my products. Watch carefully.</h1>
    }
}


export default ShowProduct;