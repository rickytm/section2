import React, { Component } from 'react';

export default class StateInAction extends Component {
	constructor() {
		super();
		this.state = {
			text: 'State in action',
        };
        
        setTimeout(() => {
            this.setState({
                text:'Text changed!'
            });
        }, 2000);
	}
	render() {
		return (
            <h1>{this.state.text} - {this.props.name}</h1>
        );
	}
}
