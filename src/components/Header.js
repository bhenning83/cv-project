import React, { Component } from 'react';


class Header extends Component {
  constructor() {
    super()

    this.clear = this.clear.bind(this);
  }


  clear = () => {
    //removes active class from other nav items
    const lis = document.querySelectorAll('nav ul li');
    lis.forEach(li => {li.className=''});

    const secs = document.querySelectorAll('.section');
    secs.forEach(sec => {sec.classList.remove('active')})
  }
  
  showPers = (e) => {
    this.clear(e);
    e.target.className='active';

    //displays section
    document.querySelector('#pers').classList.add('active');
    return 
  }

  showEdu = (e) => {
    this.clear(e);
    e.target.className='active';

    //displays section
    document.querySelector('#edu').classList.add('active');
  }

  showWork = (e) => {
    this.clear(e);
    e.target.className='active';

    //displays section
    document.querySelector('#work').classList.add('active');
  }

  render = () => {
    return(
      <nav>
        <ul>
          <li onClick={this.showPers} className='active'>Personal</li>
          <li onClick={this.showEdu}>Education</li>
          <li onClick={this.showWork}>Work</li>
        </ul>
    </nav>
    )
  }
}

export default Header