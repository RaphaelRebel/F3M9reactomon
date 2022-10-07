import React from "react"
import './App.css';
import PokemonCard from '../PokemonCard/PokemonCard';
import CounterCard from '../CounterCard/CounterCard';
import PokemonCardWrapper from '../../layouts/PokemonCardWrapper/PokemonCardWrapper';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {counter: 0}
  }

  updateCounter = () => {
    this.setState({counter: this.state.counter + 1})
  }

  render(){
  return (
    <main className='main'>
    <PokemonCardWrapper updateCounter={this.updateCounter}/>
   <CounterCard counter={this.state.counter}></CounterCard>
   </main>
  );
}
}

export default App;
