import React, { Component } from 'react';

class Personal extends Component {
  constructor() {
    super()
  }

  render = () => {
    return(
      <div className='section active' id='pers'>
        <label htmlFor='firsName'>First Name</label>
        <input type='text' id='firsName'></input>
        <label htmlFor='last-name'>Last Name</label>
        <input type='text' id='last-name'></input>
        <label htmlFor='phone'>Phone</label>
        <input type='tel' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' 
        id='phone' placeholder='555-867-5309'></input>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email'></input>
      </div>
    )
  }
}

export default Personal