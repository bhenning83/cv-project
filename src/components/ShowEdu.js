import React from 'react';
import uniqid from 'uniqid';

const ShowEdu = (props) => {
  const { stints, del } = props;


  return (
    <div className='stints'>
      {stints.map((stint) => {
        return (
          <div key={uniqid()} className='display-box'>
            <div>
              {stint.school}
            </div>
            <div className='years'>{stint.eduFrom}-{stint.eduTo}</div>
            <div>
              <span>Degree: </span>{stint.degree}
            </div>
            <div>
              <span>Area of Study: </span> {stint.study}
            </div>
            <button onClick={() => del(stint.id)}>X</button>
          </div>
        )
      })}
    </div>
  )
}

export default ShowEdu;