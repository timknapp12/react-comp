import React, { Component } from 'react';
import {addProduct, deleteProduct, updateProduct, getAllProducts} from '../ducks/reducer';
import { connect } from 'react-redux';

class ProductFunctions extends Component {
    constructor(props){
        super(props)

        this.state = {
        }
    }
  render() {
    return (
      <div>
              <div>
            <h1>GET ALL PRODUCTS</h1>
            <button type='' className='' onClick={() => this.props.getAllProducts()}>submit</button>
        </div> 

        <div>
            <h1>CREATE PRODUCT</h1>
            <input placeholder='product name'/>
            <input placeholder='product price'/>
            <button type='' className='' onClick={() => this.props.addProduct()}>submit</button>
        </div> 
        <div>
            <h1>DELETE PRODUCT</h1>
            <input placeholder='product name'ref='product_name'/>
            <input placeholder='product price'/>
            <input placeholder='product_id'/>
            <button type='' className='' onClick={() => this.props.deleteProduct()}>submit</button>
        </div> 
        <div>
            <h1>UPDATE PRODUCT</h1>
            <input placeholder='product name'/>
            <input placeholder='product price'/>
            <input placeholder='product_id'/>
            <button type='' className='' onClick={() => this.props.updateProduct()}>submit</button>
        </div> 

      </div>
    );
  }
}

// mapStateToProps 43G
function mapStateToProps(state){
    return state
}

// connect redux 43C
//share state 43G
export default connect(mapStateToProps, { addProduct, deleteProduct, updateProduct, getAllProducts })(ProductFunctions);