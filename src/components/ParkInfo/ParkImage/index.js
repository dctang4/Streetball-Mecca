import React from "react"
import "./styles.css";

const ParkImage = (props) => {
  return (
    <section 
      id="park-info-container"
      style={{backgroundImage: `url(${props.url})`}}
    >
      <div id="title">{props.name}</div>
    </section>
  )
}

export default ParkImage