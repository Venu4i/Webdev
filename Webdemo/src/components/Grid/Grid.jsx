import React, { useState } from 'react';
import logo from '../../../src/ecell.jpeg'

function Grid() {
  const [colors, setColors] = useState({
    box1: 'blue',
    box2: 'blue',
    box3: 'blue',
  });
  const [subBoxColors, setSubBoxColors] = useState(
    Array(9).fill('blue')
  );
  const containerStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const boxStyle = {
    width: '200px',
    height: '200px',
    border: '2px solid #ccc',
    cursor: 'pointer',
  };

  const box1Style = {
    ...boxStyle,
    background: 'linear-gradient(to right, rgb(179, 132, 197), rgb(71, 18, 94))',
    backgroundColor: colors.box1, 
  };

  const box2Style = {
    ...boxStyle,
    background:   `url(${logo}) no-repeat center center` ,
    backgroundSize: 'cover',
  };

  const box3Style = {
    ...boxStyle,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '10px',
    backgroundColor: colors.box3,
  };

  const subBoxStyle = {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
    border: '2px solid #2980b9',
    boxSizing: 'border-box', 
  };


  const toggleSubBoxColor = (index) => {
    setSubBoxColors((prevColors) =>
      prevColors.map((color, i) =>
        i === index ? (color === 'blue' ? 'red' : 'blue') : color
      )
    );
  };

  return (
    <div style={containerStyle}>
      <div style={box1Style} onClick={() => setColors({ ...colors, box1: colors.box1 === 'blue' ? 'red' : 'blue' })}></div>
      <div style={box2Style} onClick={() => setColors({ ...colors, box2: colors.box2 === 'blue' ? 'red' : 'blue' })}></div>
      <div style={box3Style}>
        {subBoxColors.map((color, index) => (
          <div
            key={index}
            style={{
              ...subBoxStyle,
              backgroundColor: color, 
            }}
            onClick={() => toggleSubBoxColor(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Grid;
