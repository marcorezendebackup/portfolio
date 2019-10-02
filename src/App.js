import React, { Component } from 'react';
import logo from './ex.jpg';
import './App.css';
import Portfolio from './components/Portfolio.js'
import AboutMe from './components/AboutMe.js'
import { HashRouter, Route, Link } from 'react-router-dom'
import portfolioData from './data.json'
import Item from './components/portfolio/Item.js'
import Contacts from './components/Contacts.js'

class App extends Component {
  render() {
    const paths = []

    for (let i = 0; i < portfolioData.portfolio.length; i++) {
      paths.push(`/portfolio/${portfolioData.portfolio[i].id}`)
    }

    return (
    <HashRouter basename="/">
        <Route path={['/', '/sobre-mim', '/contatos', paths]} exact render={() => (
	      <div className="App">
	          <header className="App-header">
	            <nav>
	              <ul className="nav">
	                <li className="nav-item"><Link to="/sobre-mim"><i className="fas fa-address-card"></i>sobre mim</Link></li>
	                <li className="nav-item"><Link to="/"><i class="fas fa-book"></i>portfólio</Link></li>
	                <li className="nav-item"><Link to="/contatos"><i className="fas fa-mail-bulk"></i>contatos</Link></li>
	              </ul>
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
