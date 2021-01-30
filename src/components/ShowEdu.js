import React from 'react';
import uniqid from 'uniqid';

const ShowEdu = (props) => {
  const { stints, del } = props;


  return (
    <div>
      {stints.map((stint) => {
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
            <button onClick={() => del(stint.id)}>X</button>
          </div>
        )
      })}
    </div>
  )
}

export default ShowEdu;