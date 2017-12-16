import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class Login extends Component {
    render() {
      return (
        <div className='login_body'>
            <Link to='/home'><button type="" className="loginButton">
              Sign in
            </button></Link>
          
          </div>
      );
    }
  }