import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
      if (!this.state.isLoggedIn) {
        return document.getElementById("content").innerText = "Du bist eingeloggt!"
      } else {
        return document.getElementById("content").innerText = "Du bist ausgeloggt!"
        }
  }
  
  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn ?
        <button className="loggedIn" onClick={this.handleClick}>Logout</button> :
        <button className="loggedOut" onClick={this.handleClick}>Login</button>}
      </div>
    );
  }
}

export default App;