import React, { useState } from 'react';
import Inputs from './inputs';
import Button from './button';
import Table from './table';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [data, setData] = useState([
    { firstName: 'Jonas', lastName: 'Rimkus', age: 54 },
    { firstName: 'Vestina', lastName: 'Petronytė', age: 31 },
    { firstName: 'Marius', lastName: 'Dulinskas', age: 23 },
  ]);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleClickAdd = () => {
    if (firstName && lastName && age > 0) {
      setData([...data, { firstName, lastName, age }]);
      setFirstName('');
      setLastName('');
      setAge('');
    } else if (age <= 0) {
      alert('Pataisykite amžių');
    } else {
      alert('Užpildykite visus laukus');
    }
  };

  const handleClickRemoveFirst = () => {
    const newData = [...data];
    newData.shift();
    setData(newData);
  };

  const handleClickRemoveLast = () => {
    const newData = [...data];
    newData.pop();
    setData(newData);
  };

  return (
    <div className="App">
      <h1>Append table</h1>
      <Inputs
        firstName={firstName}
        lastName={lastName}
        age={age}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleAgeChange={handleAgeChange}
      />
      <Button
        handleClickAdd={handleClickAdd}
        handleClickRemoveFirst={handleClickRemoveFirst}
        handleClickRemoveLast={handleClickRemoveLast}
      />
      <Table data={data} />
    </div>
  );
}

export default App;
