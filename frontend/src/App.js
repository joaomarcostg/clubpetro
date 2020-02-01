import React, { useState } from 'react';
import './App.css';

import Sidebar from './components/Sidebar.js'
import Topbar from './components/Topbar.js'
import Main from './components/Main.js'

function App() {
  const [nome, setNome] = useState('antifraude')

  return (

    <div className="App">
      <Sidebar setName={setNome}/>
      <Topbar name={nome} />
      <Main content={nome} />
      
    </div>
  );
}

export default App;
