import React from 'react';
import './styles.css';
// COMPONENTS
import Title from '../Title';
import Parks from '../ParkInfo/Parks';
import ParkImage from '../ParkInfo/ParkImage';
// IMPORT DATA
import parkArr from "../parkData"

// console.log('App - parkArr', parkArr)

export default function App() {
  // sorted the parkArr so the array goes from highest rated to lowest
  parkArr.sort((a,b) => b.overall -a.overall)

  return (
    <div className="App">
      <main>
        <Title />
        <section className="items-container">
          <section id="items">
            {/* Parks Component Goes Here */}
            <Parks array={parkArr}/>
          </section>
          <section id="image">
            {/* ParkImage Component Goes Here */}
            <ParkImage {...parkArr[0]} />
          </section>
        </section>
      </main>
    </div>
  );
}
