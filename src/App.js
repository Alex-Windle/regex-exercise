import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props); 
    this.state = {input: '', textarea: ''}; 

    this.inputChange = this.inputChange.bind(this);
    this.textareaChange = this.textareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputChange(e){ 
    this.setState({input: e.target.value}); 
  } 

  textareaChange(e){
    this.setState({textarea: e.target.value}); 
  }

  handleSubmit(){
    console.log("Input: ", this.state.input);  
    console.log("Textarea: ", this.state.textarea); 
    alert("click"); 
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
          <div>
            <input 
              type="text" 
              value={this.state.input} 
              onChange={this.inputChange} 
              placeholder="Enter search term..."
            />
          </div>
          <div>
            <textarea 
              rows="5" 
              cols="35" 
              value={this.state.textarea} 
              onChange={this.textareaChange} 
              placeholder="Text field..." >
            </textarea>
          </div>
          <div>
            <button onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
          <div>
            <button type="reset">
              Clear
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
