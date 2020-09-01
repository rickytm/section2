import React, { Component } from 'react';

export default class EventAndState extends Component {
	constructor() {
		super();

		this.state = {
			clickCount: 0,
			inputText: '',
		};
	}

	handleClick = () => {
		this.setState({
			inputText: '',
		});
    };
    
	handleChange = (event) => {
		this.setState({
			inputText: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('Form submitted');
	};

	render() {
		return (
			<div>
				<h1>Hello {this.state.inputText}</h1>
				<form onSubmit={this.handleSubmit}>
					<button onClick={this.handleClick} className='btn'>
						Click me!
					</button>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='Enter somet text'
					/>
				</form>
			</div>
		);
	}
}
