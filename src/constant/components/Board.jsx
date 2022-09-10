import React from "react"
import { data } from "../data"

function Board(props){

  return (
    <div>
      {data.filter((element)=> element.category === props.category).map((element)=>(
      <div key={element.id}>  
        <h1>{element.title}</h1>
        <span>{element.content}</span>
        <span>{element.category}</span>
      </div>
      ))}
    </div>
  )
}

export default Board