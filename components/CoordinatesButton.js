import React from 'react';

class CoordinatesButton extends React.Component{

	constructor() {
		super()
		this.handleEvent = this.handleEvent.bind(this)
	}

	handleEvent(event){
		let arr = [event.clientX, event.clientY]
		this.props.onReceiveCoordinates(arr)
	}

	render() {
		return(
			<div>
				<button onClick={this.handleEvent}>Event</button>
			</div>

		)
	}

}

export default CoordinatesButton