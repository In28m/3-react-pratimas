// Inputs.jsx
import React from 'react';

const Inputs = ({ firstName, lastName, age, handleFirstNameChange, handleLastNameChange, handleAgeChange }) => {
  return (
    <div className="inputs">
      <input value={firstName} onChange={handleFirstNameChange} type="text" placeholder="Vardas" />
      <input value={lastName} onChange={handleLastNameChange} type="text" placeholder="Pavardė" />
      <input value={age} onChange={handleAgeChange} type="number" placeholder="Amžius" />
    </div>
  );
};

export default Inputs;