import React from 'react';

function ColorButtons(props) {
  return (
    <div>
      <button className='border border-light'
        onClick={() => props.changeColor('green')}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'Green',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
        }}
      >
        Green
      </button>
      <button className='border border-light'
        onClick={() => props.changeColor('orange')}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'orange',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
        }}
      >
        Orange
      </button>
      <button  className='border border-light'
        onClick={() => props.changeColor('yellow')}
        style={{
          margin: '5px',
          padding: '10px 20px',
          backgroundColor: 'yellow',
          border: 'none',
          borderRadius: '5px',
          color: 'black',
        }}
      >
        Yellow
      </button>
    </div>
  );
}

export default ColorButtons;