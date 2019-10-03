import React, { Component } from 'react';

class ModalContent extends Component {
	render() {
		const { image } = this.props

		return (
			<img className="modal-image" src={image} alt="Screenshot do projeto"/>
		)
	}
}

export default ModalContent;