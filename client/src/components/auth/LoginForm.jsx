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

export default withAuth(class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: null,
      error: null,
      username: '',
      password: ''
    }
    console.log(config);
    this.oktaAuth = new OktaAuth(config);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.oktaAuth.signIn({
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
          this.setState({ sessionToken: res.sessionToken });
          this.props.auth.redirect({ sessionToken: this.state.sessionToken });
          return "/profile";
        }
      )
      .catch(err => {
        console.error(err);
        this.setState({error: err.message});
        console.log(err.statusCode + ' error', err)
      });
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {
    if (this.state.sessionToken) {
      this.props.auth.redirect({ sessionToken: this.state.sessionToken });
      return "/profile";
    }

    const errorMessage = this.state.error ? 
	<span className="error-message">{this.state.error}</span> : 
	null;

    return (
      <div className="wrapper-page">
        <div className="panel panel-color panel-inverse">
            <div className="panel-heading"> 
              <h3 className="text-center m-t-10"> Entrar em <strong>Sigam.me</strong> </h3>
            </div> 

            <div className="panel-body">
                <form className="form-horizontal m-t-10 p-20 p-b-0" onSubmit={this.handleSubmit}>
                                        
                    <div className="form-group ">
                        <div className="col-xs-12">
                            <input className="form-control" id="username" type="text" placeholder="E-Mail" value={this.state.username} onChange={this.handleUsernameChange} />
                        </div>
                    </div>
                    <div className="form-group ">
                        
                        <div className="col-xs-12">
                            <input className="form-control" id="password" type="password" placeholder="Senha" value={this.state.password} onChange={this.handlePasswordChange}/>
                        </div>
                    </div>

                    <div className="form-group ">
                        <div className="col-xs-12">
                            <label className="cr-styled">
                                <input type="checkbox" checked/>
                                <i className="fa"></i> 
                                Manter conectado
                            </label>
                        </div>
                    </div>
                    
                    <div className="form-group text-right">
                        <div className="col-xs-12">
                            <button className="btn btn-success w-md" type="submit">Entrar</button>
                        </div>
                    </div>
                    <div className="form-group m-t-30">
                        <div className="col-sm-7">
                            <Link to="/recover-password"><i className="fa fa-lock m-r-5"></i> Esqueceu sua senha?</Link>
                        </div>
                        <div className="col-sm-5 text-right">
                            <Link to="/register">Criar uma conta</Link>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
    );
  }
});