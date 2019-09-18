import React, { Component } from 'react';
import portfolioData from '../data.json'
import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

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

	render() {
		const handleOnDragStart = e => e.preventDefault();
		const { currentIndex, galleryItems, responsive } = this.state

		return (
			<div className="home-container">
				<h2 className="title">Olá! Seja Bem-Vindo</h2>
				<p className="wlc">Navegue pelo site e descubra um pouco mais sobre mim e meu trabalho até aqui.</p>
				<section className="home-portifolio-container">
					<AliceCarousel 
						mouseDragEnabled
						buttonsDisabled={true}
						autoPlayInterval={3000}
						autoPlay={false}
						items={galleryItems}
				        slideToIndex={currentIndex}
				        responsive={responsive}
				        onInitialized={this.handleOnSlideChange}
				        onSlideChanged={this.handleOnSlideChange}
				        onResized={this.handleOnSlideChange}
					>
					{portfolioData.map((item) => (
						<div className="home-portifolio-item">	
						  <div className="home-portifolio-item-img-container">
						  	<div className="wrapper-image" >
						  	<Link to={`/portfolio/${item.id}`}>
						  		<img src={`/imgs/${item.img}`} onDragStart={handleOnDragStart} alt={item.shortDescription} />
						  	</Link>
						  	</div>	
						  </div>
						  <div className="home-portifolio-item-info">
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