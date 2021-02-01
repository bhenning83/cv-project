import React, { Component } from 'react';
import Personal from './Personal'
import Education from './Education'
import Work from './Work'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      pers: {},
      edu: {},
      work: {}
    }

    this.test = this.test.bind(this);
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
  
  test = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render = () => {
    return (
      <div>
        <nav>
          <ul>
            <li onClick={this.renderPers} className='active'>Personal</li>
            <li onClick={this.renderEdu}>Education</li>
            <li onClick={this.renderWork}>Work</li>
          </ul>
        </nav>
        <form id='form' onSubmit={this.test}>
          <Personal save={this.save} />
          <Education save={this.save}/>
          <Work save={this.save}/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Home;