import React from 'react';
import uniqid from 'uniqid';

const ShowCV = (props) => {
  const {data} = props;
  if (data.edu.stints && data.work.stints) {
    return (
      <div id='cv' className='show'>
        <div className='row'>
          {data.pers.firstName} {data.pers.lastName} 
          <div>
            <div>
              {data.pers.phone}
            </div>
            <div>
              {data.pers.email}
            </div>
          </div>
        </div>
        <h2 className='sec-title'>Education</h2>
        {data.edu.stints.map(stint => {
          return (
            <div key={uniqid()}>
              <div className='lead-info'>
                {stint.school}
              </div>
              <div className='years'>{stint.eduFrom}-{stint.eduTo}</div>
              <div>
                <span>Degree: </span>{stint.degree}
              </div>
              <div>
                <span>Area of Study: </span> {stint.study}
              </div>
            </div>
          )
        })}
        <h2 className='sec-title'>Work</h2>
        {data.work.stints.map(stint => {
          return (
            <div key={uniqid()}>
              <div className='lead-info'>
                {stint.company}
              </div>
              <div>
                Title: {stint.position}
              </div>
              <div className='years'>
                {stint.workFrom}-{stint.workTo}
              </div>
              <div>
                Responsibilites: {stint.tasks}
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return( <h1 className='show'>Patience, young one.</h1>)
  }

}

export default ShowCV;