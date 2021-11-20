import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Route path='/register' component={Register} />
      <Route path = '/home' component = {Home} />
    </div>
  );
}

export default App;
