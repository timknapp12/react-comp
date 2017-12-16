import React, { Component } from 'react';
import ProductFunctions from './ProductFunctions'

export default class Home extends Component{
    constructor(){
        super();

    }


    render(){
        return(
            <div>
                Home
                <ProductFunctions/>
            </div> 
        )
    }
}

