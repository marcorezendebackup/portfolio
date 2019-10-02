import React, { Component } from 'react';
import portfolioData from '../data.json'
import Curriculum from './Curriculum'
import $ from 'jquery'; 

class AboutMe extends Component {
	state = {
		width: ''
	}
	render() {

	var url = $(window.location).attr('href'),
	    parts = url.split("/"),
	    last_part = parts[parts.length-1];
	    console.log(last_part)

    console.log(url)
		return (
			<section className="about-me">
				<div className="perfil">
					<div className="perfil-header">
						<img className="banner" src="http://dev.bts.com/sf-images/default-source/default-album/content-header-feb-19-sales-index.jpg"/>
					</div>
					<div className="perfil-image">
						<img className="me" src="https://pm1.narvii.com/6524/99ed5662082a902b0e0a3c7626581cd09a105ded_hq.jpg"/>
					</div>
					<div className="perfil-data">
						<div className="basic-data">
							<span id="name">{portfolioData.aboutMeData.perfil.name}</span>
							<span id="role">Web Developer Front End</span>
						</div>
						<div className="social-data">
							<span id="github"><a href="https://github.com/marcorezende" target="_blank"><i className="fab fa-github"></i></a></span>
							<span id="linkedin"><a href="https://www.linkedin.com/in/marco-rezende-dos-santos/" target="_blank"><i className="fab fa-linkedin"></i></a></span>
						</div>
					</div>
				</div>
	
				<div className="academic-and-company">
					<h2><i class="academic-and-company-icon fas fa-user-graduate"></i>Formação Acadêmica</h2>
					{portfolioData.aboutMeData.formacion.map((item) => (
						<div className="academic-and-company-item" key={item.id}>
							<div className="academic-and-company-image">
								<img className="logo" src={item.logo}/>
							</div>
							<div className="academic-and-company-data">
								<span className="academic-and-company-name">{item.institutionName}</span>
								<div className="academic-and-company-info">
									<span> {item.courseName} </span>
									<span> {item.duration.date.from} ● {item.duration.date.to} ({item.duration.time})</span>
								</div>
							</div>
						</div>
					))}
				</div>
				
				<div className="academic-and-company">
					<h2><i class="academic-and-company-icon fas fa-user-check"></i>Experiência Profissional</h2>
					{console.log(portfolioData.aboutMeData.proExperience)}
					{portfolioData.aboutMeData.proExperience.map((item) => (
						<div className="academic-and-company-item" key={item.id}>
							<div className="academic-and-company-image">
								<img className="logo" src={item.logo}/>
							</div>
							<div className="academic-and-company-data">
								<span className="academic-and-company-name">{item.companyName}</span>
								<div className="academic-and-company-info">
									<span> {item.role} </span>
									<span> {item.duration.date.from} ● {item.duration.date.to} ({item.duration.time})</span>
								</div>
							</div>
						</div>
					))}
				</div>

				<Curriculum/>
			</section>
		)
	}
}

export default AboutMe;