import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import marker from '../marker.png';
import $ from 'jquery'; 
import axios from 'axios';

const API_PATH = 'localhost:3000/portfolio/API/index.php';

class Contacts extends Component {
	state = {
	  name: '',
	  email: '',
	  message: '',
	  mailSent: false,
	  error: null
	}

	handleFormSubmit( event ) {
	  event.preventDefault();
	  console.log(this.state);
	  axios({
	    method: 'post',
	    url: `${API_PATH}`,
	    headers: { 'content-type': 'application/json' },
	    data: this.state
	  })
	    .then(result => {
	      this.setState({
	        mailSent: result.data.sent
	      })
	    })
	    .catch(error => this.setState({ error: error.message }));
	}

	componentDidMount() {
		var name = $('.validate-input input[name="name"]');
	    var email = $('.validate-input input[name="email"]');
	    var message = $('.validate-input textarea[name="message"]');

	    $('.validate-form').on('submit',function(){
	        var check = true;

	        if($(name).val().trim() == ''){
	            showValidate(name);
	            check=false;
	        }


	        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
	            showValidate(email);
	            check=false;
	        }

	        if($(message).val().trim() == ''){
	            showValidate(message);
	            check=false;
	        }

	        return check;
	    });


	    $('.validate-form .input').each(function(){
	        $(this).focus(function(){
	           hideValidate(this);
	       });
	    });

	    function showValidate(input) {
	        var thisAlert = $(input).parent();

	        $(thisAlert).addClass('alert-validate');
	    }

	    function hideValidate(input) {
	        var thisAlert = $(input).parent();

	        $(thisAlert).removeClass('alert-validate');
	    }
	}
	render() {
		const Map = ReactMapboxGl({
		  accessToken: "pk.eyJ1IjoibWFyY29yZXplbmRlIiwiYSI6ImNqc2gwZTM4bzA0Nno0YXI3cDc2a2c3aDEifQ.E8OOKOEq9NNV9RhSY5rbpA"
		});

		return (
				<div className="contacts-container">
					<h2 className="contact-form-title">Entre em contato</h2>
					<section className="address-and-contacts">
						<Map
						  style="mapbox://styles/mapbox/streets-v9"
						  center={[-46.805412 ,  -23.41517]}
						  zoom={[15]}
						>
						  <Marker coordinates={[-46.805412 ,  -23.41517]}>
				          	<img src={marker}/>
				          </Marker>
						</Map>
						<div className="contacts">
							<span>Santana de Parnaíba - SP</span>
							<span>Colinas da Anhanguera</span>
							<span>Av. Aloísio Magalhães, Nº 211</span>
							<div className="contacts-extra">
								<span><a href="https://github.com/marcorezende" target="_blank"><i className="fab fa-github"></i><p className="contact-content link">GitHub</p></a></span>
								<span><i class="fas fa-envelope"></i><p className="contact-content">marcorezende@outlook.com.br</p></span>
								<span><i class="fas fa-phone-square-alt"></i><p className="contact-content">(11) 4157-2960</p></span>
							</div>
						</div>
					</section>
					<section className="container-contact">
						<div className="wrap-contact">
							<form className="contact-form validate-form">
								<div className="wrap-input validate-input" data-validate="Name is required">
									<input className="input" type="text" name="name" placeholder="Nome"
										value={this.state.name}
    									onChange={e => this.setState({ name: e.target.value })}
									/>
									<span className="focus-input" data-placeholder="NAME"></span>
								</div>

								<div className="wrap-input validate-input" data-validate = "Valid email is required: ex@abc.xyz">
									
									<input className="input" type="text" name="email" placeholder="Email"
										value={this.state.email}
    									onChange={e => this.setState({ email: e.target.value })}
									/>
									<span className="focus-input" placeholder="E-MEAIL" data-placeholder="EMAIL"></span>
								</div>

								<div className="wrap-input validate-input" data-validate = "Message is required">								
									<textarea className="input message" name="message" placeholder="Mensagem"
										onChange={e => this.setState({ message: e.target.value })}
    									value={this.state.message}
									></textarea>
									<span className="focus-input" data-placeholder="MESSAGE"></span>
								</div>

								<div className="container-contact-form-btn">
									<div className="wrap-contact-form-btn">
										<form method="post" action="mailto:marcorezende@outlook.com.br"/>
										<input className="submit-btn" type="submit" onClick={e => this.handleFormSubmit(e)} value="Enviar mensagem" /> 
									</div>
								</div>
							</form>
						</div>
						<div>
						</div>
					</section>
				</div>
		)	
	}
}

export default Contacts;