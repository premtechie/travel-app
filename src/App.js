import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Register} exact/>
        <Route path = '/home' component = {Home} />
      </Switch>
    </div>
  );
}

export default App;
