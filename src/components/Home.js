import React, { Component } from 'react';
import Personal from './Personal'
import Education from './Education'
import Work from './Work'

class Home extends Component {
  constructor() {
    super()
  }


  render = () => {
    return (
      <div>
        <Personal />
        <Education />
        <Work />
      </div>
    )
  }
}

export default Home;