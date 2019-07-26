import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { getCats, createCat, deleteCat } from './api'
import Header from './Header'
import Home from './pages/Home'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import './App.css';


export default class App extends Component {
  constructor(props){
    super(props)
      this.state = {
       cats: [],
       success: false
      }
  }

handleNewCat = (newCatInfo) => {
    createCat(newCatInfo)
    .then(successCat => {
        if(typeof successCat.id == "number") {
            console.log("Purrrfect! New cat: ", successCat)
            this.setState({success: true})
            window.location.reload()
        }
    })
}

handleDelete = (id) => {
    deleteCat(id)
    .then(successDelete => {
        console.log(id + " is outta here")
        window.location.reload()
    })
}

componentDidMount() {
  getCats()
	.then(APIcats => {
	  this.setState({
		cats: APIcats
	  })
	})
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
            <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats} delete={this.handleDelete}/> }/>
            <Route exact path="/newcat" render={(props) => <NewCat handleNewCat={this.handleNewCat} success={this.state.success}/>}/>
          </Switch>
        </Router>



      </div>
      )
  }
}
        // <Route path="/" userLoggedIn={this.userLoggedIn} component={LogIn}/>
        // <Route path="feed" relatives={this.state.relatives} userName={this.state.userName} component={Feed}/>
