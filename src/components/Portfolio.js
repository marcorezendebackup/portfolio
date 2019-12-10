import React, { Component } from 'react';
import portfolioData from '../data.json'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import $ from 'jquery'; 

class Home extends Component {
	state = {
	    currentIndex: 0,
	    itemsInSlide: 1,
	    responsive: {
		    0: {
		          items: 1
		    },
		    600: {
		          items: 2
		    },
		    960: {
		          items: 3
		    },
		    1366: {
		          items: 4
		    }
		},
	    galleryItems: this.galleryItems(),
	}

	galleryItems() {
	    return (
	      Array(7).fill().map((item, i) => <h2 className="item">{i + 1}</h2>)
	    )
	}

	slidePrevPage = () => {
	    const currentIndex = this.state.currentIndex - this.state.itemsInSlide
	    this.setState({ currentIndex })
	}

	slideNextPage = () => {
	    const { itemsInSlide, galleryItems: { length }} = this.state
	    let currentIndex = this.state.currentIndex + itemsInSlide
	    if (currentIndex > length) currentIndex = length

	    this.setState({ currentIndex })
	}

	handleOnSlideChange = (event) => {
	    const { itemsInSlide, item } = event
	    this.setState({ itemsInSlide, currentIndex: item })
	}

	toggleClass = (eleClass) => {
    	$(eleClass).on("mousedown touchstart", function(e) {
		    $(this).addClass('grabbing')
		})

		$(eleClass).on("mouseup touchend", function(e) {
		    $(this).removeClass('grabbing')
		})
    }

	render() {
		const handleOnDragStart = e => e.preventDefault();
		const { currentIndex, galleryItems, responsive } = this.state

		return (
			<div className="home-container">
				<h2 className="title">Olá! Seja Bem-Vindo</h2>
				<p className="wlc">Navegue pelo site e descubra um pouco mais sobre mim e meu trabalho até aqui.</p>
				<section className="home-portfolio-container">
					<AliceCarousel 
						mouseDragEnabled
						buttonsDisabled={true}
						autoPlayInterval={3000}
						autoPlay={true}
						items={galleryItems}
				        slideToIndex={currentIndex}
				        responsive={responsive}
				        onInitialized={this.handleOnSlideChange}
				        onSlideChanged={this.handleOnSlideChange}
				        onResized={this.handleOnSlideChange}
					>
					{portfolioData.portfolio.map((item) => (
						<div className="home-portfolio-item" key={item.id}>	
						  <div className="home-portfolio-item-img-container">
						  	<div className="wrapper-image" >
						  	<Link to={`/${item.id}`}>
						  		<picture>
								    <source srcSet={process.env.PUBLIC_URL + `/imgs/${item.img}-high.png`} media="(min-width: 1500px)"/>
								    <source srcSet={process.env.PUBLIC_URL + `/imgs/${item.img}-medium.png`} media="(max-width: 600px) and (min-width: 351px)"/>
								    <source srcSet={process.env.PUBLIC_URL + `/imgs/${item.img}-low.png`} media="(max-width: 350px)"/>
						  			<img className="portfolio-image" src={process.env.PUBLIC_URL + `/imgs/${item.img}-medium.png`} onDragStart={handleOnDragStart} alt={item.shortDescription} />
								</picture>
						  	</Link>
						  	</div>	
						  </div>
						  <div className="home-portfolio-item-info" onClick={() => this.toggleClass(".home-portfolio-item-info")}>
						  	<h4> {item.title} </h4>
						  	<p> {item.shortDescription} </p>
						  </div>
						</div>
					))}
					</AliceCarousel>
				</section>	
			</div>
		)
	}
}

export default Home;