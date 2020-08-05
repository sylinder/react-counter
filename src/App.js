import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterGroup from './components/CounterGroup';

function App() {
  return (
    <div className="App">
      <CounterGroup defaultValue = {0}/>
    </div>
  );
}

export default App;
