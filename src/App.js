import React from 'react';
import './App.css';
import PersonComponent from './components/personComponent';
function App() {
  return (
    <div className="App">
      <PersonComponent firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"}/>
      <PersonComponent firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"}/>
    </div>
  );
}

export default App;