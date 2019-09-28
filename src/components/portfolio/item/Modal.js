import React, { Component } from 'react';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import { renderToStaticMarkup } from 'react-dom/server';
import ModalContent from './ModalContent';

class Modal extends Component {
	state = {
		show: false
	}
	render() {
		const { item } = this.props

		return (
			<div>
				<SweetAlert
					show={this.state.show}
					title={""}
					data-allow-outside-click={true}
					confirmButtonText={ "Sair"}
         			html
					text={renderToStaticMarkup(<ModalContent image={item}/>)}
					onConfirm={() => this.setState({ show: false })}
				/>
				<button className='btn-open-img' onClick={() => this.setState({ show: true })}><i class="fas fa-search"></i></button>
			</div>
		)
	}
}

export default Modal;