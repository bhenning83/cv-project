import React from 'react';
import uniqid from 'uniqid';

const ShowCV = (props) => {
  const {data} = props;
  if (data.edu.stints && data.work.stints) {
    return (
      <div id='cv' className='show'>
        <div>
          {data.pers.firstName}
        </div>
        <div>
          {data.pers.lastName}
        </div>
        <div>
          {data.pers.phone}
        </div>
        <div>
          {data.pers.email}
        </div>
        {data.edu.stints.map(stint => {
          return (
            <div key={uniqid()}>
              <div>
                {stint.school}
              </div>
              <div>
                {stint.degree}
              </div>
              <div>
                {stint.study}
              </div>
              <div>
                {stint.eduFrom}
              </div>
              <div>
                {stint.eduTo}
              </div>
            </div>
          )
        })}
        {data.work.stints.map(stint => {
          return (
            <div key={uniqid()}>
              <div>
                {stint.company}
              </div>
              <div>
                {stint.position}
              </div>
              <div>
                {stint.workFrom}
              </div>
              <div>
                {stint.workTo}
              </div>
              <div>
                {stint.tasks}
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