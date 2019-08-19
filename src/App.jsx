import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mdc-text-field username">
          <input type="text" className="mdc-text-field__input" id="username-input" name="username"/>
          <label className="mdc-floating-label" for="username-input">Username</label>
          <div className="mdc-line-ripple"></div>
        </div>
        <div className="mdc-text-field password">
          <input type="password" className="mdc-text-field__input" id="password-input" name="password"/>
          <label className="mdc-floating-label" for="password-input">Password</label>
          <div className="mdc-line-ripple"></div>
        </div>
      </div>
    );
  }
}

export default App;
