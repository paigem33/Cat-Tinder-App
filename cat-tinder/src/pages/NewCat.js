import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Form, FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

import '../App.css';

export default class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

handleChange = (event) => {
  let {form} = this.state
  form[event.target.name] = event.target.value
  this.setState({form: form})
  console.log({form})
}

// updateList = () => {
//   // based on 'trigger' from the send from parent and the button click, send newly-created state back to parent, which will then run through myCallback and enter it into parent state.
//   // also may need to reset this state in the same method
// }
// someFn = () => {
//         this.props.callbackFromParent({this.state.form});
//     },
handleClick = (e) => {
  e.preventDefault()
  this.props.handleNewCat(this.state.form)
}

  render() {
    const { form } = this.state
    return (
      <div class="m-3">
      <Form>
            <Form.Group controlId="name" >
              <Form.Label id="name" label="name" >Name</Form.Label>
              <Form.Control type="text" placeholder="Name" onChange={this.handleChange} name="name"/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label id="age" label="age" >Age</Form.Label>
              <Form.Control as="select" onChange={this.handleChange} name="age">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label id="enjoys" label="enjoys" >Enjoys</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={this.handleChange} name="enjoys"/>
            </Form.Group>
            <Button variant="primary" id="submit" label="submit" type="submit" onClick={this.handleClick}>
              Create Cat Profile
            </Button>
          </Form>
        </div>
      )
  }
  

}
