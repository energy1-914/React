import React, {useEffect, useState} from "react";

function Loading() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [text, setText] = useState('')
  const [subText, setSubText] = useState('')
  const changeFn = (local)=>{
    setText(local)
  }

  useEffect(()=>{
    setTimeout(() =>setIsLoaded(true), 3000);
  })

  useEffect(()=>{
    if (text === '서울'){setSubText('망원역')} 
    else if (text === '부산'){setSubText('부산역')}
  })

  return (
    <div>
    { isLoaded ? 
       <>
        <h1>로딩완료!</h1>
        <button onClick={()=>changeFn('서울')}>서울</button>
        <button onClick={()=>changeFn('부산')}>부산</button>
        <p>현재 내 지역: {text}</p>
        <p>세부 지역: {subText}</p>
       </> : <></>}    
    </div>
  )  
}

export default Loading