import React from 'react';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import Home from './pages/Home';
import Moives from './pages/Moives';
import { BrowserRouter as Router, Switch, Routes, Route } from 'react-router-dom';

function App() {

  return(
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/movies'>
              <Moives />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/' exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
  
export default App;
