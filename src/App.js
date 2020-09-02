import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			temp: '',
			cityName: '',
			weather: '',
			high: '',
			low: '',
			icon: '',
			isRaining: '',
		};
	}

	getCityWeather = (city) => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e312dbeb8840e51f92334498a261ca1d`;

		axios.get(url).then((response) => {
			this.setState({
				temp: response.data.main.temp,
				high: response.data.main.temp_max,
				low: response.data.main.temp_min,
				weather: response.data.weather[0].description,
				icon: response.data.weather[0].icon,
				cityName: response.data.name,
			});
		});
	};

	searchCity = (event) => {
		event.preventDefault();
		const city = document.getElementById('city').value;
		this.getCityWeather(city);
	};

	componentDidUpdate(prevProps, prevState) {
		if (this.state.weather !== prevState.weather) {
			const isRaining = this.state.weather.includes('rain');
			if (isRaining) {
				this.setState({
					isRaining: 'Rain rain go away!!!',
				});
			}
		}
	}

	componentDidMount() {
		this.getCityWeather('Monterrey,MX');
		var elems = document.querySelectorAll('.modal');
		var instances = window.M.Modal.init(elems);
	}

	render() {
		const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`;

		return (
			<div className='App'>
				<div className='row'>
					<div className='col s6 offset-s3'>
						<h1>{this.state.temp}</h1>
						<h1>{this.state.isRaining}</h1>

						<a
							className='waves-effect waves-light btn modal-trigger'
							href='#modal1'
						>
							Modal
						</a>
						<form onSubmit={this.searchCity}>
							<input
								id='city'
								type='text'
								placeholder='Enter a City Name'
							/>
						</form>
					</div>
				</div>
				<div id='modal1' className='modal'>
					<div className='modal-content'>
						<h4>{this.state.cityName}</h4>
						<p>
							High: {this.state.high} - Low: {this.state.low}
						</p>
						<p>
							{this.state.weather} <img src={iconUrl} alt='' />{' '}
						</p>
					</div>
					<div className='modal-footer'>
						<a
							href='#!'
							className='modal-close waves-effect waves-green btn-flat'
						>
							Agree
						</a>
					</div>
				</div>
			</div>
		);
	}
}
