import './App.css';
import logoIdea from './images/logoIdea.png'
import Button from './components/button';
import Screen from './components/screen';
import ButtonClear from './components/buttonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addValue = value => {
    setInput(input + value);
  };

  const calculate = () => {
    if(input){
      setInput(evaluate(input));
    }else {
      alert('Por favor, ingrese valores para realizar calculos.')
    }
  };

  return (
    <div className="App">
      <div className='container'>
        <img
          src={logoIdea}
          className='logo'
          alt='Logo de calculadora' />
      </div>
      <div className='container-calculator'>
        <div>
        <Screen input={input}/>
        </div>
        <div className='row'>
          <Button click={addValue}>1</Button>
          <Button click={addValue}>2</Button>
          <Button click={addValue}>3</Button>
          <Button click={addValue}>+</Button>
        </div>
        <div className='row'>
          <Button click={addValue}>4</Button>
          <Button click={addValue}>5</Button>
          <Button click={addValue}>6</Button>
          <Button click={addValue}>-</Button>
        </div>
        <div className='row'>
          <Button click={addValue}>7</Button>
          <Button click={addValue}>8</Button>
          <Button click={addValue}>9</Button>
          <Button click={addValue}>*</Button>
        </div>
        <div className='row'>
          <Button click={calculate}>=</Button>
          <Button click={addValue}>0</Button>
          <Button click={addValue}>.</Button>
          <Button click={addValue}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear clear={()=>setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
