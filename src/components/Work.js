import React, { Component } from 'react';

class Work extends Component {
  constructor() {
    super()
  }

  addWork = (e) => {
    e.preventDefault();
    console.log('add another work')
  }

  render = () => {
    return(
      <div className='section' id='work'>
        <label htmlFor='company'>Company</label>
        <input type='text' id='company'></input>
        <label htmlFor='position'>Position</label>
        <input type='text' id='position'></input>
        <label htmlFor='workFrom'>From</label>
        <input type='text' id='workFrom'></input>
        <label htmlFor='workTo'>To</label>
        <input type='text' id='workTo'></input>
        <label htmlFor='tasks'>Responsibilities</label>
        <textarea id='tasks' form='form'></textarea>
        <button onClick={this.addWork}>Add Another</button>
      </div>
    )
  }
}

export default Work