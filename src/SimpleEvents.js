import React, { Component } from 'react';

export default class SimpleEvents extends Component {
	constructor() {
		super();

		this.state = {
			clickCount: 0,
			text: '',
		};
	}

	handleClick = () => {
		let { clickCount } = this.state;
		clickCount++;
		this.setState({
			clickCount,
		});
		console.log(`TEST ${clickCount}`);
	};

	handleChange = (event) => {
		this.setState({
			text: event.target.value,
		});
	};

	handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted');
    };

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<button onClick={this.handleClick} className='btn'>
						Click me!
					</button>
					<input
						onChange={this.handleChange}
						type='text'
						placeholder='Enter somet text'
					/>
					<h1>Hello {this.state.text}</h1>
				</form>
			</div>
		);
	}
}
