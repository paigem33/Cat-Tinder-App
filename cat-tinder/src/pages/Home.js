import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import '../App.css';

export default class Home extends Component {
  render() {
    return (
      <div class="homePage">
      <h2>It's simple.</h2>
        <p>You make a cat. You like a cat. You don't like a cat. That's all there is to it with the hottest app of the summer: Cat Tinder.</p>
        <p><small>Results not
guaranteed</small></p>
      </div>
      )
  }
}
