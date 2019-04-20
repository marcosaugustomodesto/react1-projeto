import React, { Component } from 'react';

import './css/pure-min.css';
import './css/side-menu.css';

class App extends Component {
  render() {
    return (

<div id="layout">
    <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livros</a></li>				
            </ul>
        </div>
    </div>

    <div id="main">
        <div className="header">
            <h1>Home</h1>
        </div>
    </div>
</div>

    );
  }
}

export default App;



alphaville -> av angelica  (11:30)  1h  10m
av angelica <- alphaville  (13:40)  15h 36m

