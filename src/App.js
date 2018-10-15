import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

// Componenete con funsion simple
function  Hello(props){
    return <h1>Componente</h1>
}


function  Hello2(props){
    return <h2>{props.title}</h2>
}
// componenete con funsion igual flecha
const Hello3 =(props) => <h3>{props.title}</h3>
// componenete con fusion de clase
class Hello4 extends Component{
    render(){
        return <h2>{this.props.title}</h2>
    }
}

/*function Img(props){
    return <img src='.../../../public/img/001.png'></img>
}*/

// componenete con fusion de clase
class App extends Component {
    // render no tiene parametro
    render() {
        return (

            <div className="App">
          
              <img src={logo} className="App-logo" alt="logo" />
                
                <Hello/>
                <Hello2 title='Hello from props' />
                <Hello3 title="Otro componente"></Hello3>
                <Hello4 title="Componente con clase"></Hello4>
          
           
          </div>
  
         
        );
    }
}

export default App;