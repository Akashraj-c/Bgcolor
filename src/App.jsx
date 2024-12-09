import React, { useState } from 'react';
import ColorButtons from './ColorButtons';

export default function Colorbar() {
  const [color, setColor] = useState('white'); // State for background color

  return (
    <div
      style={{
        backgroundColor: color,
        
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className='mb-5'>Background Color Changer</h1>
      {/* Pass the state and handler as props */}
      <ColorButtons
        currentColor={color}
        changeColor={setColor}
        dataFromParent="Color Changer Application"
      />
    </div>
  );
}