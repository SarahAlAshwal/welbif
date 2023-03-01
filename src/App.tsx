import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { MyGlobalContext } from './GlobalContext';

function App() {
  const [choice, setChoice] = useState('');
  // axios
  //   .post('https://welbi.org/api/start', {
  //     email: 'sa.alashwal@gmail.com',
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  //token:"77311ef8-86b9-4a32-80da-c8103c0b51b1"

  return (
    <MyGlobalContext.Provider value={{ choice, setChoice }}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
