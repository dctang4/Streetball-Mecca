import React from "react";
import "./styles.css";
import Park from "./Park";

// console.log('Parks - parkArr', parkArr);

const Parks = (props) => {
  // console.log('Parks - props', props.array)
  const parks = props.array.map((park, index) => {
    return <Park {...park} key={index} />;
  });
  return <ul className="parks">{parks}</ul>
}

export default Parks;