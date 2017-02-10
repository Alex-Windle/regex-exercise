import React, { Component } from 'react';
import './App.css';

export default class Search extends Component{

	render(){
	// 	console.log('Props: ', this.props);
	// let index = this.props.index;
	// let text = this.props.text;
	let message = this.props.message;

		return(
			<div className="Search">
				<h1>Search Results:</h1>
				<div className="result-box">	
					<h4>{this.props.result}</h4>
				</div>	
				<p>{message}</p>
			</div>
		); 
	}
}