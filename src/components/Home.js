import React, { Component } from 'react';
import Personal from './Personal'
import Education from './Education'
import Work from './Work'
import ShowCV from './ShowCV'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      pers: {
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
      },
      edu: {
        stints: []
      },
      work: {
        stints: []
      },
      edit: true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear = () => {
    //removes active class from other nav items
    const lis = document.querySelectorAll('nav ul li');
    lis.forEach(li => {li.className=''});

    const secs = document.querySelectorAll('.section');
    secs.forEach(sec => {sec.classList.remove('active')})
  }
  
  renderPers = (e) => {
    this.clear(e);
    e.target.className='active';

    //displays section
    document.querySelector('#pers').classList.add('active');
    return 
  }

  renderEdu = (e) => {
    this.clear(e);
    e.target.className='active';

    //displays section
    document.querySelector('#edu').classList.add('active');
  }

  renderWork = (e) => {
    this.clear(e);
    e.target.className='active';

    //displays section
    document.querySelector('#work').classList.add('active');
  }

  save = (items, idx) => {
    switch (idx) {
      case 0:
        this.setState({ pers: items })
        break;
      case 1:
        this.setState({ edu: items })
        break;
      case 2:
        this.setState({ work: items })
        break;
    }
  }

  checkIfFilled = () => {
    if (this.state.work.stints.length !== 0
      && this.state.edu.stints.length !== 0
      && this.state.pers.firstName !== ''
      && this.state.pers.lastName !== ''
      && this.state.pers.phone !== ''
      && this.state.pers.email !== '') {
        return true
      }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const button = document.querySelector("button[type='submit']");

    //prevents submission if work and edu aren't added 
    if (this.checkIfFilled() === true) {
      document.querySelector('#cv').classList.toggle('show');
      document.querySelector('#cv').classList.toggle('display-box');
      document.querySelector('#formMeat').classList.toggle('show');
      document.querySelector('nav').classList.toggle('show');
      document.querySelector('form').classList.toggle('trans');
      button.style.display = 'block';
      if (this.state.edit === true) {
        button.textContent = 'Edit';
      } else {
        button.textContent = 'Submit';
      }
      this.setState({
        edit: !this.state.edit
      })
    } else {
      alert('add education and/or work')
    }
  }

  allowSubmit = () => {
    if (this.checkIfFilled() === true) {
      document.querySelector('button[type="submit"]').classList.add('submittable');
    }
  }

  render = () => {
    return (
      <div className='home-container'>
        <nav>
          <ul>
            <li onClick={this.renderPers} className='active'>Personal</li>
            <li onClick={this.renderEdu}>Education</li>
            <li onClick={this.renderWork}>Work</li>
          </ul>
        </nav>
        <form id='form' onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div id='formMeat'>
            <Personal save={this.save} />
            <Education save={this.save}/>
            <Work save={this.save}/>
          </div>
        <button type='submit' className='submitBtn'>Submit</button>
        </form>
        {this.allowSubmit()}
        <ShowCV data={this.state} />
      </div>
    )
  }
}

export default Home;