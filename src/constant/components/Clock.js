import React, { useState } from 'react'
import moment from 'moment-timezone'

function Clock(props) {
    const {timezone,newTZ} = props
    const [time, setTime] = useState(moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss'));
    
    const changeTZ = (TZ) => {
       setTime(moment().tz(TZ).format('YYYY-MM-DD HH:mm:ss'))
    }

    return (
     <>
      <div>{time}</div>
      <button onClick={()=> changeTZ(newTZ)}>{newTZ}로 바꾸기</button>
    </>
    )
}

export default Clock