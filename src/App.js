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

class Text extends Component{
    render(){
        const textoSegundobool = this.props.boolean2 ? 'Cierto' : 'Falso'
        const arrayOfNumbers2 = this.props.arrayOfNumbers2.map(n =>  n *2)
        return(
            <div>
               <h2>{this.props.text}</h2>
               <h2>{this.props.number}</h2>
               <p>{JSON.stringify(this.props.boolean)}</p>
               <p>{textoSegundobool}</p>
               <p>{this.props.arrayOfNumbers.join('-')}</p>
               <p>{arrayOfNumbers2.join('-')}</p>
               <p>{this.props.objeto.key}</p>
            </div>
        )
         
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
                <Text   arrayOfNumbers={[1,2,25,58]}
                        arrayOfNumbers2={[1,2,25,58]}
                        objeto = {{key:"value On", key2 :"value OFF"}}
                        number={18} 
                        text="Componente 4" 
                        boolean={true}  
                        boolean2
                        >
               </Text>
                
                
          
           
          </div>
  
         
        );
    }
}

export default App;