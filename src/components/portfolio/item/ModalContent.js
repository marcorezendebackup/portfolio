import React, { Component } from 'react';

class ModalContent extends Component {
	render() {
		const { image } = this.props

		return (
			<img className="modal-image" src={image}/>
		)
	}
}

export default ModalContent;