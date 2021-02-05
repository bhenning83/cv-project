import React from 'react';
import uniqid from 'uniqid';

const ShowWork = (props) => {
  const { stints, del } = props;


  return (
    <div>
      <div className='stints'>
        {stints.map((stint) => {
          return (
            <div key={uniqid()} className='display-box'>
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
              <button onClick={() => del(stint.id)}>X</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ShowWork;