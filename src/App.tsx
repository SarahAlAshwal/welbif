import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { MyGlobalContext } from './GlobalContext';
import { start } from './Api';
import { getResidents } from './Api';
import { Resident } from './types';

function App() {
  const [choice, setChoice] = useState('');
  const [token, setToken] = useState('');
  const [residents, setResidents] = useState(Array<Resident>);
  useEffect(() => {
    start()
      .then(function (response) {
        setToken(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getResidents(token)
      .then((res) => {
        setResidents(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [token]);

  //token:"77311ef8-86b9-4a32-80da-c8103c0b51b1"

  return (
    <MyGlobalContext.Provider
      value={{ choice, setChoice, token, setToken, residents }}
    >
      <div className="App">
        <Header />
        <Main />
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
