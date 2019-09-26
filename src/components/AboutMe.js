import React, { Component } from 'react';
import portfolioData from '../data.json'

class AboutMe extends Component {
	render() {
		return (
			<section className="about-me">
				<div className="perfil">
					<div className="perfil-header">
						<img src="http://dev.bts.com/sf-images/default-source/default-album/content-header-feb-19-sales-index.jpg"/>
					</div>
					<div className="perfil-image">
						<img src="https://pm1.narvii.com/6524/99ed5662082a902b0e0a3c7626581cd09a105ded_hq.jpg"/>
					</div>
					<div className="perfil-data">
						<span id="name">Marco Rezende dos Santos</span>
						<span id="role">Web Developer Front End</span>
					</div>
				</div>

				<div className="academic-formation">
					<h2>Formação Academica</h2>
					{portfolioData.aboutMeData.formacion.map((item) => (
						<div className="academic-formation-item" key={item.id}>
							<div className="academic-institution-image">
								<img src={item.logo}/>
							</div>
							<div className="formation-data">
								<span className="academic-institution-name">{item.institutionName}</span>
								<div className="formation-info">
									<span> {item.courseName} </span>
									<span> {item.duration.date.from} ● {item.duration.date.to} ({item.duration.time})</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		)
	}
}

export default AboutMe;