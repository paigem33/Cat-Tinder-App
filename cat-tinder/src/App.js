import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Header from './Header'
import Home from './pages/Home'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
       cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          enjoys: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          enjoys: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          enjoys: "Being in charge."
        }
        ]
      }
  }
  
handleNewCat = (e) => {
  console.log(e)
}
  
  render() {
    return (
      <div>
        <Router>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" class="navbar-brand">Home</Link>
              <div id="navbarColor02">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link to="/cats" class="nav-link" >Cats</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/newcat" class="nav-link" >New Cat</Link>
                  </li>
                </ul>
              </div>
          </nav>
           <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats}/> }/>
            <Route exact path="/newcat" render={(props) => <NewCat handleNewCat={this.handleNewCat}/>}/>
          </Switch>
        </Router>
        
       
        
      </div>
      )
  }
}
        // <Route path="/" userLoggedIn={this.userLoggedIn} component={LogIn}/>
        // <Route path="feed" relatives={this.state.relatives} userName={this.state.userName} component={Feed}/>