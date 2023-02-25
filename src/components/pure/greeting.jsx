import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
    constructor(props){
        super(props)
        this.state ={
            age : 0
        }
        
    }
    
    render() {
        return (
            <h1>Hola</h1>
        );
    }

    birthday = ()=>{
        this.setState((prevState)=> (
            {
                age : prevState.age + 1
            }
        ))

    }
}


Greeting.propTypes = {
 name : PropTypes.string,
};


export default Greeting;
