import React from 'react';

class DelayedButton extends React.Component{

	constructor() {
		super()

		this.handleEvent = this.handleEvent.bind(this)
	}

	handleEvent(event) {
		event.persist()
		setTimeout(() => {
			this.props.onDelayedClick(event)
		}, this.props.delay)
	}

	render() {
		return(
			<div>
				<button onClick={this.handleEvent}>Delayed</button>
			</div>

		)
	}

}

export default DelayedButton