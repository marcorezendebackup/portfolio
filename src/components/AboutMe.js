import React, { Component } from 'react';
import portfolioData from '../data.json'
import Curriculum from './Curriculum'

class AboutMe extends Component {
	state = {
		width: ''
	}
	render() {
		return (
			<section className="about-me">
				<div className="perfil">
					<div className="perfil-header">
						<img className="banner" src="http://dev.bts.com/sf-images/default-source/default-album/content-header-feb-19-sales-index.jpg" alt="Banner"/>
					</div>
					<div className="perfil-image">
						<img className="me" src={process.env.PUBLIC_URL + `/imgs/0.jpg`} alt="Imagem de perfil do dev da aplicação"/>
					</div>
					<div className="perfil-data">
						<div className="basic-data">
							<span id="name">{portfolioData.aboutMeData.perfil.name}</span>
							<span id="role">Web Developer Front End</span>
						</div>
						<div className="social-data">
							<span id="github"><a href="https://github.com/marcorezende" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></span>
							<span id="linkedin"><a href="https://www.linkedin.com/in/marco-rezende-dos-santos/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></span>
						</div>
					</div>
				</div>
	
				<div className="academic-and-company">
					<h2><i className="academic-and-company-icon fas fa-user-graduate"></i>Formação Acadêmica</h2>
					{portfolioData.aboutMeData.formacion.map((item) => (
						<div className="academic-and-company-item" key={item.id}>
							<div className="academic-and-company-image">
								<picture>
								    <source srcset={process.env.PUBLIC_URL + `/imgs/${item.logo}-high.png`} media="(min-width: 1500px)"/>
								    <source srcset={process.env.PUBLIC_URL + `/imgs/${item.logo}-medium.png`} media="(max-width: 600px) and (min-width: 351px)"/>
								    <source srcset={process.env.PUBLIC_URL + `/imgs/${item.logo}-low.png`} media="(max-width: 350px)"/>
									<img className="logo" src={process.env.PUBLIC_URL + `/imgs/${item.logo}-medium.png`} alt="Logo da instituição"/>
								</picture>
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
					<h2><i className="academic-and-company-icon fas fa-user-check"></i>Experiência Profissional</h2>
					{portfolioData.aboutMeData.proExperience.map((item) => (
						<div className="academic-and-company-item" key={item.id}>
							<div className="academic-and-company-image">
								<picture>
								    <source srcset={process.env.PUBLIC_URL + `/imgs/${item.logo}-high.png`} media="(min-width: 1500px)"/>
								    <source srcset={process.env.PUBLIC_URL + `/imgs/${item.logo}-medium.png`} media="(max-width: 600px) and (min-width: 351px)"/>
								    <source srcset={process.env.PUBLIC_URL + `/imgs/${item.logo}-low.png`} media="(max-width: 350px)"/>
								    <img className="logo" src={process.env.PUBLIC_URL + `/imgs/${item.logo}-medium.png`} alt="Logo da empresa"/>
								</picture>
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