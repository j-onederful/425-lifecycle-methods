import React, { Component } from 'react'

export default class FavoriteFoods extends Component {
	// component is constructed during the 'Mounting' phase
	constructor() {
		// get the stuff from Component
		super()
		this.state = {
			// text value for a controlled form input
			textValue: '',
			// an array of fav foods that the user has entered
			favorites: []
		}
		console.log('FavoriteFoods has been constructed!')
	}

	// runs after the component is constructed in the 'Mount' phase
	// important -- runs only once
	// fetching API data and putting it on the page (with no user interaction)
	componentDidMount() {
		console.log('FavoriteFoods has Mounted!')
	}
	// runs everytime the component is re-rendered
	// aka when state changes of this or a parent component
	componentDidUpdate() {
		console.log('FavoriteFoods has updated!')
		// accurate state console.logs here
		console.log('FavoriteFoods state:', this.state)
	}

	// happens in the 'Unmounting' phase
	// used for things like removing intervals, event listeners mounted on the DOM
	componentWillUnmount() {
		console.log('FavoriteFoods is unmounting')
	}

	// event handlers
	handleChange = e => this.setState({ textValue: e.target.value }) 

	handleSubmit = e => {
		e.preventDefault()
	}

	// render happens during mounting and updating
	render() {	
		console.log('FavoriteFoods is rendering')

		return (
			<div>
				<h2>Favorite Foods</h2>

				<form onSubmit={this.handleSubmit}>
					<label htmlFor="text-input">Enter a food:</label>
					<input 
						type="text"
						id="text-input"
						value={this.state.textValue}
						onChange={this.handleChange}
					/>
				</form>
			</div>
		)
	}
}