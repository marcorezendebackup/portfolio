import React, { Component } from 'react';
import './App.css';
import Portfolio from './components/Portfolio.js'
import AboutMe from './components/AboutMe.js'
import { HashRouter, Route, Link } from 'react-router-dom'
import portfolioData from './data.json'
import Item from './components/portfolio/Item.js'
import Contacts from './components/Contacts.js'
import $ from 'jquery'; 

class App extends Component {
	state = {
		navFull: true 
	}

  componentDidMount() {
  	const width = $(window).width()
    	if (width > 500) {
	    	this.setState({ 
	    		navFull: true 
	    	})
    	} else if (width < 500) {
	    	this.setState({ 
	    		navFull: false 
	    	})
    	}
  }	

  render() {
    const paths = []

    for (let i = 0; i < portfolioData.portfolio.length; i++) {
      paths.push(`/${portfolioData.portfolio[i].id}`)
    }

    $(window).resize(function() {
    	let width = $(window).width()
    	if (width > 500) {
    		if (this.state.navFull === false) {
		    	this.setState({ 
		    		navFull: true 
		    	})
    		}
    	} else if (width < 500) {
    		if (this.state.navFull === true) {
		    	this.setState({ 
		    		navFull: false 
		    	})
    		}
    	}
    	
    }.bind(this))


    return (
    <HashRouter basename="/">
        <Route path={['/', '/sobre-mim', '/contatos', paths]} exact render={() => (
	      <div className="App">
	          <header className="App-header">
	            <nav>
	              {this.state.navFull === true &&
	              <ul className="nav">
	                <li className="nav-item">
	                	<Link to="/sobre-mim">
	                		<i className="fas fa-address-card"></i>sobre mim
	                    </Link>
	                </li>
	                <li className="nav-item">
	                	<Link to="/">
	                		<i className="fas fa-book"></i>portfólio
	                	</Link>
	                </li>
	                <li className="nav-item">
	                	<Link to="/contatos">
	                		<i className="fas fa-mail-bulk"></i>contatos
	                	</Link>
	                </li>
	              </ul>
				  }

				  {this.state.navFull === false &&
	              <ul className="short-nav">
	                <li className="short-nav-item">
	                	<Link to="/sobre-mim">
	                		<i className="fas fa-address-card short-nav-item-icon"></i>
	                    </Link>
	                </li>
	                <li className="short-nav-item">
	                	<Link to="/">
	                		<i className="fas fa-book short-nav-item-icon"></i>
	                	</Link>
	                </li>
	                <li className="short-nav-item">
	                	<Link to="/contatos">
	                		<i className="fas fa-mail-bulk short-nav-item-icon"></i>
	                	</Link>
	                </li>
	              </ul>
				  }
	            </nav>
	          </header>
	          <main className="main">

	          <Route path="/" exact render={() => (
	              <Portfolio/>
	          )}/>
	          <Route path="/sobre-mim" exact render={() => (
	              <AboutMe/>
	          )}/>
	          <Route path={[paths]} exact render={() => (
	              <Item/>
	          )}/>
	          <Route path="/contatos" exact render={() => (
	              <Contacts/>
	          )}/>
	          </main>

	          <footer>Marco Rezende® 2019 | Site desenvolvido com React</footer>
	      </div>
      )}/>     
    </HashRouter>
      
       
    )
  };
}

export default App;
