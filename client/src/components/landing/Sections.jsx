import React, { Component } from 'react';

import Imagem1 from '../../images/drawing-tablet.png';
import Imagem2 from '../../images/code-window.png';
import Imagem3 from '../../images/clock.png';
import Imagem4 from '../../images/screen-3.png';

export default class Sections extends Component {
    render() {
        return (
        <div>
            <section className="section features" id="how">
                <div className="container text-center">

                    <div className="row">
                        <div className="col-sm-12">
                            <h2 className="title">Sobre o Sigam.me</h2>
                            <p className="slogan">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                        </div>
                    </div> 

                    <div className="row pt80">
                        <div className="col-sm-4">
                            <div className="features-2">
                                <img src={Imagem1} alt=""/>
                            </div>
                            <div>
                                <h3>Responsive Design</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div> 

                        <div className="col-sm-4">
                            <div className="features-2">
                                <img src={Imagem2} alt=""/>
                            </div>
                            <div>
                                <h3>Clean Code</h3>
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis.</p>
                            </div>
                        </div> 

                        <div className="col-sm-4">
                            <div className="features-2">
                                <img src={Imagem3} alt=""/>
                            </div>
                            <div>
                                <h3>Easy Customize</h3>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam.</p>
                            </div>
                        </div> 
                    </div> 
                </div>
            </section> 

            <section className="content-wrap bg-light section pb0" id="features">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-6">
                            <div className="feature-sec">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus eu sollicitudin lacus, nec ultricies lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat arcu ut orci porta, eget porttitor felis suscipit. Sed a nisl ullamcorper, tempus augue at, rutrum lacus. </p>
                                <a href="#" className="use-btn btn-primary">Assine Agora</a>
                            </div>
                        </div>

                        <div className="col-sm-6 featured-img">
                            <img src={Imagem4} alt="Features-img" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="pricing">
                <div className="container">

                    <div className="row text-center">
                        <div className="col-sm-12">
                            <h2 className="title">Planos</h2>
                            <p className="slogan">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis.</p>
                        </div>
                    </div>

                    <div className="row pt80">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="price_card text-center">
                                        <div className="header bg-info">
                                            <span className="price">R$ 10</span>
                                            <span className="name">Inicial</span>
                                        </div>
                                        <ul className="price-features">
                                            <li>5 Projects</li>
                                            <li>1 GB Storage</li>
                                            <li>No Domain</li>
                                            <li>1 User</li>
                                        </ul>
                                        <button className="btn btn-info w-md">Assine agora</button>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="price_card text-center">
                                        <div className="header bg-pink">
                                            <span className="price">R$ 20</span>
                                            <span className="name">Profissional</span>
                                        </div>
                                        <ul className="price-features">
                                            <li>15 Projects</li>
                                            <li>5 GB Storage</li>
                                            <li>2 Domain</li>
                                            <li>10 User</li>
                                        </ul>
                                        <button className="btn btn-pink w-md">Assine agora</button>
                                    </div>
                                    <span className="tip">* Mais popular!</span>
                                </div>

                                <div className="col-sm-4">
                                    <div className="price_card text-center">
                                        <div className="header bg-purple">
                                            <span className="price">R$ 30</span>
                                            <span className="name">Empresarial</span>
                                        </div>
                                        <ul className="price-features">
                                            <li>Unlimited Projects</li>
                                            <li>10 GB Storage</li>
                                            <li>10 Domain</li>
                                            <li>100 User</li>
                                        </ul>
                                        <button className="btn btn-purple w-md">Assine agora</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
  }