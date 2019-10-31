import React, { useState } from 'react'
import './App.css'


const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }
  
  return (
    <div className="App">
      {isLoggedIn
      ? <><h1>Du bist eingeloggt!</h1><button className="loggedIn" onClick={handleClick}>Logout</button></>
      : <><h1>Du bist ausgeloggt!</h1><button className="loggedOut" onClick={handleClick}>Login</button></>}
    </div>
  )
}

export default App
