import React from 'react'
import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widgets from  './Widgets.js'
import Login from "./Login.js"
import { useStateValue } from "./StateProvider.js"

function App() {
  const [{user}, dispatch] = useStateValue()

  return (
    // BEM naming convention (lower case className, for example)
    <div className="app">

      {!user ? (<Login />) : (
        <div>
        <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}   

    </div>
  );
}

export default App;
