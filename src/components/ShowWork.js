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
              <div className='row'>
                <div>
                  <span>Company: </span>{stint.company}
                </div>
                <div>
                  <span>Position: </span>{stint.position}
                </div>
              </div>
              <div className='row'>
                <div>
                  From: {stint.workFrom}
                </div>
                <div>
                  To: {stint.workTo}
                </div>
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