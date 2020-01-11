import React, { Component } from 'react';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      city: '',
      state: '',
      zipcode: null
    }
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
        <button type='button' className='form-btn'>Find Shelters</button>
      </form>
    );
  }
}

export default Form;