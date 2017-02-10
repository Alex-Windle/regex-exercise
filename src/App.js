import React, { Component } from 'react';

import Search from './Search'; 
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props); 
    this.state = {input: '', text: ''}; 
  } 

  inputHandler(e){ 
    this.setState({input: e.target.value}); 
  } 

  textHandler(e){
    this.setState({text: e.target.value}); 
  }

  clickHandler(){
    let input = this.state.input;
    let text = this.state.text;

    console.log('Submitted input: ', input); 
    console.log('Submitted text: ', text); 

    //use regex to compare input/text
    let searchString = text.search(input.toString()); 

    console.log('result: ', searchString); 
    if (searchString >= 0){ console.log("match successful!")}
    if (searchString === -1){ console.log("no matches!")}
  }

  render() {

    let input = this.state.input;
    let text = this.state.text;

    return (
      <div className="App">
        <div className="App-header"><h2>Regex Exercise</h2></div>
        
        <p className="App-intro">To get started, enter a search term and text field.</p>
       

        <div>
          <input 
            type="text" 
            value={this.state.input} 
            onChange={this.inputHandler.bind(this)} 
            placeholder="Search term..."
          />
        </div>
          
        <div>
          <textarea
            rows="5" 
            cols="35" 
            value={this.state.text} 
            onChange={this.textHandler.bind(this)} 
            placeholder="Text field..."
          />
        </div>
            
        <Search input={input} text={text} />

        <button onClick={this.clickHandler.bind(this)}>Submit</button>
      </div>
    );
  }
}

