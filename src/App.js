import React from 'react'
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widgets from  './Widgets.js'

function App() {
  const user = 'Ernexian'
  return (
    // BEM nameing convention (lower case className, for example)
    <div className="app">

      {!user ? (<h3>Login</h3>) : (
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
