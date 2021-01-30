import React from 'react';
import uniqid from 'uniqid';

const ShowWork = (props) => {
  const { stints, del } = props;


  return (
    <div>
      {stints.map((stint) => {
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
            <button onClick={() => del(stint.id)}>X</button>
          </div>
        )
      })}
    </div>
  )
}

export default ShowWork;