import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import marker from '../marker.png';

class Contacts extends Component {
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
				</div>
		)	
	}
}

export default Contacts;