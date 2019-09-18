import React, { Component } from 'react';

class AboutMe extends Component {
	render() {
		return (
			<section className="about-me">
				<ul className="about-me">
					<li className="icon-container">
						<div className="icon">
							<img src="imgs/diploma.svg" className="diploma-icon" style={{"verticalAlign":"top", "marginRight": "4px"}}/>
							<span>Formação</span>
						</div>
						<div>
							<p>Web Developer (Udacity) ● <b><i>12/2018 - 10/2019</i></b></p>
							<p>Tecnico em Eletroeletronica (SENAI) ● <b><i>01/2016 - 12/2017</i></b></p>
						</div>
					</li>
					<li className="icon-container">
						<div className="icon">
							<i className="fas fa-birthday-cake" style={{"verticalAlign":"top"}}></i>
							<span>Idade</span>
						</div>
						<div>
							<p>20 anos <b><i>(08/05/1999)</i></b></p>
						</div>
					</li>
					<li className="icon-container">
						<div className="icon">
							<i className="fas fa-suitcase" style={{"verticalAlign":"top"}}></i>
							<span>Experiência Profissional</span>
						</div>
						<div>
							<p>PLURAL Indústria Gráfica <b><i>(Ajudante Geral)</i></b>● <b><i>04/2018 - 06/2018</i></b></p>
							<p>Vision Byte <b><i>(Estagiário)</i></b>● <b><i>10/2017 - 12/2017</i></b></p>
						</div>
					</li>
				</ul>
			</section>
		)
	}
}

export default AboutMe;