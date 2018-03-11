import React, { Component } from 'react';

import Logo from '../../images/logo.png';

export default class Footer extends Component {
    render() {
        return (
        <footer className="footer">
	        <div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-3">
						<a className="navbar-brand-footer" href="#"><img src={Logo} alt="logo"/></a>
                    </div>
                    <div className="col-lg-4 col-lg-offset-3 col-md-7">
                    	<ul className="nav navbar-nav">
					      	<li><a href="#how">Sobre</a></li>
					        <li><a href="#features">Funcionalidades</a></li>
							<li><a href="#pricing">Planos</a></li>
					    </ul>
                    </div>
                    <div className="col-lg-2 col-md-2">
						<ul className="social-icons">
							<li><a href="#"><i className="fa fa-facebook"></i></a></li>
							<li><a href="#"><i className="fa fa-twitter"></i></a></li>
							<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
	    </footer>
        );
    }
  }