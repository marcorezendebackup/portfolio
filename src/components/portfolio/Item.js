import React, { Component } from 'react';
import portfolioData from '../../data.json'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Modal from './item/Modal';
import $ from 'jquery';

class Portfolio extends Component {
	state = {
		pagePath: $(window.location).attr('href').split("/").slice(-1).pop(),
	    currentIndex: 0,
	    itemsInSlide: 1,
	    responsive: {
		    0: {
		          items: 1
		    },
		    1200: {
		          items: 2
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
		const { pagePath } = this.state;
		const handleOnDragStart = e => e.preventDefault();
		const { currentIndex, galleryItems, responsive } = this.state
		let portfolioItem = '';

		for (let i = 0; i < portfolioData.portfolio.length; i++) {
			if (portfolioData.portfolio[i].id === pagePath) {
				portfolioItem = portfolioData.portfolio[i];
			}
		}

		
		return (
			<section className="item-page">
				<h1>{portfolioItem.title}</h1>
				<a href={portfolioItem.githubLink} target="_blank"><i class="fab fa-github"></i>Repositório</a>
				{portfolioItem.liveDemo !== undefined &&
					<a href={portfolioItem.liveDemo} target="_blank" className="last-link"><i class="fas fa-globe"></i>Live Demo</a>
				}
				<div className="item-content">
					{portfolioItem.longDescription.map((paragraph) => (
						<p key={paragraph}> {paragraph} </p>
					))}
					<h4>Screenshots</h4>
					<AliceCarousel 
						mouseDragEnabled
						buttonsDisabled={true}
						autoPlay={false}
						items={galleryItems}
				        slideToIndex={currentIndex}
				        responsive={responsive}
				        onInitialized={this.handleOnSlideChange}
				        onSlideChanged={this.handleOnSlideChange}
				        onResized={this.handleOnSlideChange}
					>
					{portfolioItem.screenshots.map((item) => (
						<div className="item-screenshots">	
						  	<img className="item-image" src={item} onDragStart={handleOnDragStart} onClick={() => this.toggleClass(".item-image")} />
							<Modal item={item}/>
						</div>	
					))}
					</AliceCarousel>
				</div>
			</section>
		)
	}
}

export default Portfolio;