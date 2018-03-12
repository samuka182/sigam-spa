import React from 'react'; 
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../../node_modules/ionicons/dist/css/ionicons.min.css';

import config from '../../app.config';

require('jquery');
require('bootstrap');
require('pace');

export default withAuth(class RegistrationForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sessionToken: null
    };
    this.oktaAuth = new OktaAuth({ url: config.url });
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);    
  }

  async checkAuthentication() {
    const sessionToken = await this.props.auth.getIdToken();
    if (sessionToken) {
      this.setState({ sessionToken });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  handleFirstNameChange(e){
    this.setState({firstName:e.target.value});
  }
  handleLastNameChange(e) {
    this.setState({ lastName: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    fetch('/api/users', { 
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(user => {
      this.oktaAuth.signIn({
        username: this.state.email,
        password: this.state.password
      })
      .then(res => this.setState({
        sessionToken: res.sessionToken
      }));
    })
    .catch(err => console.log);
  }

  render(){
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return null;
    }

    return(
      <div className="wrapper-page">
        <div className="panel panel-color panel-inverse">
            <div className="panel-heading"> 
              <h3 className="text-center m-t-10"> Create a new Account </h3>
            </div> 

            <div className="panel-body">
                <form className="form-horizontal m-t-10 p-20 p-b-0" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-xs-12">
                          <input className="form-control" type="email" id="email" value={this.state.email} onChange={this.handleEmailChange} required="" placeholder="Email" />
                        </div>
                    </div>

                    <div className="form-group ">
                        <div className="col-xs-12">
                            <input className="form-control " type="text" id="firstName" value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="Primeiro Nome" />
                        </div>
                    </div>

                    <div className="form-group ">
                        <div className="col-xs-12">
                            <input className="form-control " type="text" id="lastName" value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="Sobrenome" />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-xs-12">
                            <input className="form-control " type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} required="" placeholder="Senha" />
                        </div>
                    </div>

                    <div className="form-group ">
                        <div className="col-xs-12">
                            <label className="cr-styled">
                                <input type="checkbox" />
                                <i className="fa"></i> 
                                Eu aceito os <strong><a href="#">Termos e Condições</a></strong>
                            </label>
                        </div>
                    </div>
                    
                    <div className="form-group text-right">
                        <div className="col-xs-12">
                            <button className="btn btn-success w-md" type="submit">Registrar</button>
                        </div>
                    </div>

                    <div className="form-group m-t-30">
                        <div className="col-sm-12 text-center">
                            <Link to="/login">Já possui uma conta?</Link>
                        </div>
                    </div>
                </form> 
            </div>
        </div>
    </div>
    );
  }

});