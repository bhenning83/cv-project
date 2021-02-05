import React, { Component } from 'react';

class Personal extends Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  //sends entry data to Home
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state !== prevState) {
      this.props.save(this.state, 0);
    }
  }

  render = () => {
    return(
      <div className='section active' id='pers'>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' onChange={this.handleChange}></input>
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' onChange={this.handleChange}></input>
        <label htmlFor='phone'>Phone</label>
        <input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' 
        id='phone' placeholder='555-867-5309' onChange={this.handleChange}></input>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' onChange={this.handleChange}></input>
      </div>
    )
  }
}

export default Personal