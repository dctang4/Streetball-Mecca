import React from "react"
import "./styles.css";

const Park = (props) => {
  // console.log('Park - props', props)
  return (
    <li className="park" style={{background: "white"}}>
      <span className="parkName">{props.name} </span>
      <span style={{borderColor:props.color}} className="rating">{props.overall}</span>
    </li>
  )
}

export default Park