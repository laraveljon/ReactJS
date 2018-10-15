import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function  Hello(props){
    return <h1>Componente</h1>
}


function  Hello2(props){
    return <h2>{props.title}</h2>
}

class App extends Component {
    render() {
        return (
            <div className="App">
            
              <img src={logo} className="App-logo" alt="logo" />
                <Hello/>
                <Hello2 title='Hello from props' />
                Learn React
          
           
          </div>
  
         
        );
    }
}

export default App;