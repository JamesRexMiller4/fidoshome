import React, { Component } from 'react';
import './Form.scss';
import { addAnimals } from '../../actions';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      type: 'dog',
      state: '',
      zipcode: null,
      miles: null
    }
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value.toLowerCase()})
  }

  onSubmit = () => {
    let type = this.state.type
    let state = this.state.state
    let miles = this.state.miles

    fetch('https://api.petfinder.com/v2/animals?' + 'location=' + state + '&status=adoptable' + '&type=' 
    + type + '&distance=' + miles, {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
        'Content-Type': 'application/json',
        mode: 'no-cors'
      }
    })
    .then(res => res.json())
    .then(data => {this.props.addAnimals(data.animals)})
  }

  render() { 
    return ( 
      <form className='form'>
        <h2 className='form-h2'>Search</h2>
        <label for='type-input' className='label'>Type</label>
        <select onClick={(e) => this.handleChange(e)} id='type-input' className='form-input' type='text' name='type' placeHolder='Dog'>
          <option name='type'>Dog</option>
          <option name='type'>Cat</option>
          <option name='type'>Rabbit</option>
        </select>
        <label for='state-input' className='label'>State</label>
        <input onChange={(e) => this.handleChange(e)} id='state-input' className='form-input' type='text' name='state' placeHolder='CO'></input>
        <label for='zipcode-input' className='label'>Zipcode</label>
        <input onChange={(e) => this.handleChange(e)} id='zipcode-input' className='form-input' type='text' name='zipcode' placeHolder='80042'></input>
        <label for='miles-input' className='label'>Miles</label>
        <input onChange={(e) => this.handleChange(e)} id='miles-input' className='form-input' type='number' name='miles' step='5'></input>
        <button onClick={this.onSubmit}type='button' className='form-btn'>Find Shelters</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addAnimals: animals => dispatch(addAnimals(animals))
})

export default connect(null, mapDispatchToProps)(Form);