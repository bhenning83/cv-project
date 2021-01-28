import React, { Component } from 'react';
import Personal from './Personal'
import Education from './Education'
import Work from './Work'

class Home extends Component {
  constructor() {
    super()
    this.clear = this.clear.bind(this);
  }

  clear = () => {
    //removes active class from other nav items
    const lis = document.querySelectorAll('nav ul li');
    lis.forEach(li => {li.className=''});
  }
  
  showPers = (e) => {
    this.clear(e);
    e.target.className='active';
    console.log(e.target.textContent)
    return 
  }

  showEdu = (e) => {
    this.clear(e);
    e.target.className='active';

  }

  showWork = (e) => {
    this.clear(e);
    e.target.className='active';

  }

  render = () => {
    return (
      <div>
        <nav>
          <ul>
            <li onClick={this.showPers}>Personal</li>
            <li onClick={this.showEdu}>Education</li>
            <li onClick={this.showWork}>Work</li>
          </ul>
        </nav>
        <div>
          <Personal />
          <Education />
          <Work />
        </div>
      </div>
    )
  }
}

export default Home;