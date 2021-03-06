import React from 'react';
import{ BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
function App() {
  return (
    <Router>
      
    <div className="App">
      <Switch>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
