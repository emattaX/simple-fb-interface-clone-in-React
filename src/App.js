import React from 'react'
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'

function App() {
  return (
    // BEM nameing convention (lower case className, for example)
    <div className="app">

      <Header />

      <div className='app__body'>
      	<Sidebar />
      	<Feed />
      </div>

    </div>
  );
}

export default App;
