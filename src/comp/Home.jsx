import React, { Component } from 'react';

export class Home extends Component{
    render(){
        return(
            <div>
                <h1>WELCOME TO {this.props.text}</h1>
            </div>
        )
    }
}