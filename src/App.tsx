import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { MyGlobalContext } from './GlobalContext';
import { start } from './Api';
import { getResidents, getPrograms } from './Api';
import { Resident, Program } from './types';

function App() {
  const [choice, setChoice] = useState('');
  const [token, setToken] = useState('');
  const [residents, setResidents] = useState(Array<Resident>);
  const [programs, setPrograms] = useState(Array<Program>);

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
    if (token) {
      getResidents(token)
        .then((res) => {
          setResidents(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      getPrograms(token)
        .then((res) => {
          setPrograms(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [token]);

  return (
    <MyGlobalContext.Provider
      value={{ choice, setChoice, token, setToken, residents, programs }}
    >
      <div className="App">
        <Header />
        <Main />
      </div>
    </MyGlobalContext.Provider>
  );
}

export default App;
