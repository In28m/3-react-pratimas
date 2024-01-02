// Button.jsx
import React from 'react';

const Button = ({ handleClickAdd, handleClickRemoveFirst, handleClickRemoveLast }) => {
  return (
    <div className="buttons">
      <button onClick={handleClickAdd}>Pridėti</button>
      <button onClick={handleClickRemoveFirst}>Ištrinti pirmą</button>
      <button onClick={handleClickRemoveLast}>Ištrinti paskutinį</button>
    </div>
  );
};

export default Button;