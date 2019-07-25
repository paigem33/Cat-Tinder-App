import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron">
          <h1 class="display-3">Cat Tinder</h1>
          <p class="lead">Find the cat that's right for you!</p>
          <hr class="my-4"></hr>
        </div>
      </div>
      )
  }
}
