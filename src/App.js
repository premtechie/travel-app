import React from 'react';
import './App.css';
import Input from './Components/Input';
import {Route} from 'react-router-dom';
import Button from './Components/Button'
import Register from './Pages/Register';


function App() {
  return (
    <div className="App">
      <Route path='/register' component={Register} />
      <Route path='/button' component={Button} />
      
    </div>
  );
}

export default App;
