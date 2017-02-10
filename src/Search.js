import React, { Component } from 'react';
import './App.css';

export default class Search extends Component{

	render(){
		console.log('Props: ', this.props);
		return(
			<div className="Search">
				<h1>Search Results: </h1>
				<h3>Looking for {this.props.input} in {this.props.text}</h3>
			</div>
		); 
	}
}