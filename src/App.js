import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Regex Exercise</h2>
        </div>
        <p className="App-intro">
          To get started, enter a search term and text field.
        </p>
        <form id="form">
          <div>Search term: <input type="text"></input></div>
          <div>Text field: <textarea rows="5" cols="35"></textarea></div>
          <div><button type="submit">Submit</button></div>
          <div><button type="reset">Clear</button></div>
        </form>
      </div>
    );
  }
}

export default App;
