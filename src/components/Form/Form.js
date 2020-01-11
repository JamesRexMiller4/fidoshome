import React, { Component } from 'react';
import './Form.scss';
import { addAnimals } from '../../actions';
import { connect } from 'react-redux';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: '',
      state: '',
      zipcode: null
    }
  }

  onSubmit = () => {
    fetch('https://api.petfinder.com/v2/animals?organization=RI77&status=adoptable', {
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
        <label for='city-input' className='label'>City</label>
        <input id='city-input' className='form-input' type='text' name='city' placeHolder='Denver'></input>
        <label for='state-input' className='label'>State</label>
        <input id='state-input' className='form-input' type='text' name='state' placeHolder='CO'></input>
        <label for='zipcode-input' className='label'>Zipcode</label>
        <input id='zipcode-input' className='form-input' type='text' name='zipcode' placeHolder='80042'></input>
        <button onClick={this.onSubmit}type='button' className='form-btn'>Find Shelters</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addAnimals: animals => dispatch(addAnimals(animals))
})

export default connect(null, mapDispatchToProps)(Form);