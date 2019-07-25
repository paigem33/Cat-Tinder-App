import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import '../App.css';

export default class Cats extends Component {
  render() {
    return (
      <div id="cats-display">
            {this.props.cats.map((cat, index) =>{
              return (
                  <div class="card text-white bg-info mb-3">
                    <div class="card-header">Name: {cat.name}</div>
                    <div class="card-body">
                      <h4 class="card-title">Age: {cat.age}</h4>
                      <p class="card-text">About: {cat.enjoys}</p>
                    </div>
                  </div>
                )
              })}
      </div>
      )
  }
}

// <ListGroup.Item key={index}>
//                   <h4>
//                     <span className='cat-name'>{cat.name}</span> - <small className='cat-age'>{cat.age} years old</small>
//                   </h4>
//                     <span className='cat-enjoys'>{cat.enjoys}</span>
//                   </ListGroup.Item>
                  
                  
                  
// <div class="card text-white bg-info mb-3" style="max-width: 20rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body">
//     <h4 class="card-title">Info card title</h4>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>
// </div>