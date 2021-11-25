import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [repeat, useRepeat] = useState()

  const handleChange = ({target}) => {
    useRepeat(target.value)
  }

    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" onChange={handleChange} placeholder="Empieza a escribir algo" />
        <p className="repeater">{repeat}</p>
      </div>
    );
}

export default App;
