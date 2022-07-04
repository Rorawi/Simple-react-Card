import React, { Component } from 'react';
import { Home } from "./Home";
import { WelcomeComponents } from './WelcomeComponent';
import { Image } from "./Image";
import './myStyles.css';

export class SimpleCard extends Component {
    render() { 
      return (
        <div className='container'>
          {/* <div className='img'> */}
            <Image src={require("./flower.jpg")} alt="a flower" className="image"/>
            {/* </div> */}
            
          
        <div className='info'>
        <Home text="THE HOME BOUQUET"/>
         <WelcomeComponents place="Accra, Abelenkpe" contact="0000 000 000" website="www.restore.org"/>
        </div>

            
        </div>
      );
    }
  }
   