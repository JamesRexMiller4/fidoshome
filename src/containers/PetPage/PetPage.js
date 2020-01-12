import React, { Component } from 'react';
import './PetPage.scss';
import { connect } from 'react-redux';



class PetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <section>
        <h2>Welcome to the Pet Page</h2>
      </section>
    );
  }
}
 
export default PetPage;