import React, { Component } from 'react';
import ShowWork from './ShowWork'

class Work extends Component {
  constructor() {
    super()
    
    this.state = {
      stint: {
        company: '',
        position: '',
        workFrom: '',
        workTo: '',
        tasks: '',
        id: 0
      },
      stints: []
    }
  }

  addWork = (e) => {
    e.preventDefault();
    this.setState({
      stints: this.state.stints.concat(this.state.stint),
      stint: {
        company: '',
        position: '',
        workFrom: '',
        workTo: '',
        tasks: '',
        id: this.state.stint.id + 1
      }
    })

    //empty form fields
    document.querySelector('#company').value = '';
    document.querySelector('#position').value = '';
    document.querySelector('#workFrom').value = '';
    document.querySelector('#eduTo').value = '';
    document.querySelector('#tasks').value = '';
  }

  handleChange = (e) => {
    this.setState({
      stint: {
        ...this.state.stint, [e.target.id]: e.target.value
      }
    })
  }

  removeWork = (id) => {
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
      this.props.save(this.state, 2);
    }
  }

  render = () => {
    return(
      <div className='section' id='work'>
        <label htmlFor='company'>Company</label>
        <input type='text' id='company' onChange={this.handleChange}></input>
        <label htmlFor='position'>Position</label>
        <input type='text' id='position' onChange={this.handleChange}></input>
        <label htmlFor='workFrom'>From</label>
        <input type='text' id='workFrom' onChange={this.handleChange}></input>
        <label htmlFor='workTo'>To</label>
        <input type='text' id='workTo' onChange={this.handleChange}></input>
        <label htmlFor='tasks'>Responsibilities</label>
        <textarea id='tasks' form='form' onChange={this.handleChange}></textarea>
        <button onClick={this.addWork}>Add Another</button>
        <ShowWork stints={this.state.stints} del={this.removeWork} />
      </div>
    )
  }
}

export default Work