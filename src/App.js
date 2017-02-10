import React, { Component } from 'react';

import Search from './Search'; 
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props); 
    this.state = {input: '', text: '', result: '', index: '', message: ''}; 
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

    //regex SEARCH
    let searchResult = text.search(input); 


    if (searchResult >= 0){ 
      this.setState({result: 'Match successful.', index: searchResult}); 
      //display message 
      let array = text.split(''); 
      let newArray = array.slice(searchResult, array.length);
      let finalArray = newArray.join('');
      this.setState({message: 'The match begins at *' + finalArray});
    }

    if (searchResult === -1){ 
      this.setState({result: 'No match found.'});
    }
  } 

  render() {

    let input = this.state.input;
    let text = this.state.text;
    let result = this.state.result; 
    let index = this.state.index;
    let message = this.state.message;

    return (
      <div className="App">
        <div className="App-header"><h2>Regex Exercise</h2></div>

        <div className="Body">
            <div><p className="App-intro">To get started, enter a search term and text field.</p></div>

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

            <div><button onClick={this.clickHandler.bind(this)}>Submit</button></div>
              
           <Search input={input} text={text} result={result} index={index} message={message} />
          
        </div>
        <div><footer></footer></div>
      </div>
    );
  }
}

