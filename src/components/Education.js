import React, { Component } from 'react';
import ShowEdu from './ShowEdu';

class Education extends Component {
  constructor() {
    super()

    this.state = {
      stint: {
        school: '',
        degree: '',
        study: '',
        eduFrom: '',
        eduTo: '',
        id: 0
      },
      stints: []
    }
  }

  addEdu = (e) => {
    e.preventDefault();
    this.setState({
      stints: this.state.stints.concat(this.state.stint),
      stint: {
        school: '',
        degree: '',
        study: '',
        eduFrom: '',
        eduTo: '',
        id: this.state.stint.id + 1
      }
    })

    //empty form fields
    document.querySelector('#school').value = '';
    document.querySelector('#degree').value = '';
    document.querySelector('#study').value = '';
    document.querySelector('#eduFrom').value = '';
    document.querySelector('#eduTo').value = '';
  }

  handleChange = (e) => {
    this.setState({
      stint: {
        ...this.state.stint, [e.target.id]: e.target.value
      }
    })
  }

  removeEdu = (id) => {
    let filteredItems = this.state.stints.filter(function (stint) {
      return (stint.id !== id);
    });
   
    this.setState({
      stints: filteredItems
    });
  }

  //sends entry data to Home
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state != prevState) {
      this.props.save(this.state, 1);
    }
  }

  render = () => {
    return(
      <div className='section' id='edu'>
        <label htmlFor='school'>School</label>
        <input type='text' id='school' onChange={this.handleChange}></input>
        <label htmlFor='degree'>Degree:</label>
        <select name='degree' id='degree' onChange={this.handleChange}>
          <option value='' hidden> 
          Select an Option 
          </option>
          <option value='none'>None</option>
          <option value='ass'>Associate's</option>
          <option value='bach'>Bachelor's</option>
          <option value='masters'>Master's</option>
          <option value='doctor'>Doctorate</option>
        </select>
        <label htmlFor='study'>Area of Study</label>
        <input type='text' id='study' onChange={this.handleChange}></input>
        <label htmlFor='eduFrom'>From</label>
        <input type='year' id='eduFrom' placeholder='yyyy' onChange={this.handleChange}></input>
        <label htmlFor='eduTo'>From</label>
        <input type='year' id='eduTo' placeholder='yyyy' onChange={this.handleChange}></input>
        <button onClick={this.addEdu}>Add</button>
        <ShowEdu stints={this.state.stints} del={this.removeEdu} />
      </div>
    )
  }
}

export default Education