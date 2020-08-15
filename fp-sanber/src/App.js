import React from 'react';
import './App.css';
import {UserProvider} from "./context/UserContext"
import Apps from './components/Appss'

function App() {
  return (
    <UserProvider>
      <Apps/>
    </UserProvider>
  );
}

export default App;
