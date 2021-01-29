import React, { Component } from 'react';

class Education extends Component {
  constructor() {
    super()
  }

  addEdu = (e) => {
    e.preventDefault();
    console.log('hiya')
  }

  render = () => {
    return(
      <div className='section' id='edu'>
        <label htmlFor='school'>School</label>
        <input type='text' id='school'></input>
        <label htmlFor='degree'>Degree:</label>
        <select name='degree' id='degree'>
          <option value='ass'>Associate's</option>
          <option value='bach'>Bachelor's</option>
          <option value='masters'>Master's</option>
          <option value='doctor'>Doctorate</option>
        </select>
        <label htmlFor='study'>Area of Study</label>
        <input type='text' id='study'></input>
        <label htmlFor='eduFrom'>From</label>
        <input type='year' id='eduFrom' placeholder='yyyy'></input>
        <label htmlFor='eduTo'>From</label>
        <input type='year' id='eduTo' placeholder='yyyy'></input>
        <button onClick={this.addEdu}>Add Another</button>
      </div>
    )
  }
}

export default Education