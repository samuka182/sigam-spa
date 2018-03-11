import React, { Component } from 'react';
import {Navbar, Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

import Imagem1 from '../../images/stock1.jpg';
import Imagem2 from '../../images/stock2.jpg';
import Imagem3 from '../../images/stock3.jpg';

export default withAuth(class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
          this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    render() {
        if (this.state.authenticated === null) return null;
        return (
            <header>
                <section className="hero">
                    <div className="container">
                        <div className="row nav-wrapper">
                            <nav className="navbar navbar-custom">
                                <div className="container-fluid">
                                    <Navbar.Header>
                                        <Navbar.Brand>
                                            <a href="">Sigam.me</a>
                                        </Navbar.Brand>
                                    </Navbar.Header>
                                    <div id="bs-example-navbar-collapse-1">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a href="#how">Sobre</a></li>
                                            <li><a href="#features">Funcionalidades</a></li>
                                            <li><a href="#pricing">Planos</a></li>
                                            <li><Link to="/login" className="btn-signup btn-success">Entrar</Link></li>
                                            <li><Link to="/register" className="btn-signup btn-primary">Registrar</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="row hero-content text-center">
                            <h1>Sigam.me - Titulo de impacto</h1>
                            <div id="macbook">
                                <Carousel id='tour'>
                                    <Carousel.Item>
                                        <img alt="slide-img" src={Imagem1} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img alt="slide-img" src={Imagem2} />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img alt="slide-img" src={Imagem3} />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>
            </header>          
        );
    }
});