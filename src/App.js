import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props); 
    this.state = {input: '', textarea: ''}; 

    this.inputChange = this.inputChange.bind(this); //need to understand
  }

  clickTest() {
    alert("You clicked the button!"); 
  }
  
  inputChange(e){ 
    this.setState({input: e.target.value}); 
  } 

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
          <div><input type="text" value={this.state.input} onChange={this.inputChange} placeholder="Enter search term..."/></div>
          <div><textarea rows="5" cols="35"  value={this.state.textarea} placeholder="Text field..." ></textarea></div>
          <div><button onClick={this.clickTest}>Submit</button></div>
          <div><button type="reset">Clear</button></div>
        </form>
      </div>
    );
  }
}

export default App;
