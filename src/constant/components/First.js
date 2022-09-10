import React, {useState} from "react";

function Calc(){
  const [add, setAdd] = useState(100);
  const countUp = ()=>{
    setAdd(add+1);
  };
  return (
    <div>
      {add}
      <button onClick={countUp}>더하기버튼</button>
    </div>
  )
};

export default Calc;


