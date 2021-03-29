import React from 'react'
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widgets from  './Widgets.js'
import Login from "./Login.js"

function App() {
  const user = null
  return (
    // BEM nameing convention (lower case className, for example)
    <div className="app">

      {!user ? (<Login />) : (
        <>
        <Header />
          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}   

    </div>
  );
}

export default App;
