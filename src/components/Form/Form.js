import React, { Component } from 'react';
import './Form.scss';
import { addAnimals } from '../../actions';
import { connect } from 'react-redux';
import { fetchAnimals } from '../../apiCalls/apiCalls';
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      type: 'dog',
      state: '',
      zipcode: '',
      page: 1
    }
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value.toLowerCase()})
  }

  onSearch = () => {
    let type = this.state.type;
    let state = this.state.state;
    let zip = this.state.zipcode;
    let location = 'location=';
    let page = this.state.page;

    state.length > zip.length ? location = location + state
    : zip.length > state.length ? location = location + zip
    : location = ''

    fetchAnimals(type, location, page)
    .then(data => {
      console.log(data)
      {this.props.addAnimals(data.animals)}
    })
  }

  render() { 
    return ( 
      <form className='form'>
        <h2 className='form-h2'>Search</h2>
        <label for='type-input' className='label'>Type</label>
        <select onChange={(e) => this.handleChange(e)} id='type-input' className='form-input' type='text' name='type' placeHolder='Dog'>
          <option name='type'>Dog</option>
          <option name='type'>Cat</option>
          <option name='type'>Rabbit</option>
        </select>
        <label for='state-input' className='label'>State</label>
        <input onChange={(e) => this.handleChange(e)} id='state-input' className='form-input' type='text' name='state' placeHolder='CO'></input>
        <label for='zipcode-input' className='label'>Zipcode</label>
        <input onChange={(e) => this.handleChange(e)} id='zipcode-input' className='form-input' type='text' name='zipcode' placeHolder='80042'></input>
        <button onClick={this.onSearch} type='button' className='form-btn'>Find Pets</button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addAnimals: animals => dispatch(addAnimals(animals))
})

export default connect(null, mapDispatchToProps)(Form);