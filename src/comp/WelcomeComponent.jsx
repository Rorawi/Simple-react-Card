import React, { Component } from 'react';
import './myStyles.css';

export class WelcomeComponents extends Component {
    render() { 
      return (
        <div>
          <h3>Grab your flowers at {this.props.place} at a cool price.</h3>
          <p><h4>Contact us on {this.props.contact} </h4></p>
              <p>
                <h1>OR</h1>
              </p>

          <p><h4>Contact us on {this.props.website} </h4></p>
          
        </div>
      );
    }
  }
   
  
//   export default WelcomeComponents;