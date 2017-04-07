import axios from 'axios';
import React, { Component } from 'react';

import '../styles/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login_email: '',
            login_pass: ''
        }
    }

    onInputChange(event) {
        let target = {};
        target[event.target.id] = event.target.value;
        this.setState(target);
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('http://microcv.5unken.me/Members/login', {"email": this.state.login_email, "password": this.state.login_pass}).then(
            success => { localStorage.setItem('token', success.data.id) },
            fail => { alert("Vos identifiants sont incorrects"); }
        );
    }

    render() {
        return (
            <div className="LoginPage">
                <div className="login-html">
                    <div className="login-form">
                        <form onSubmit={this.onSubmit.bind(this)} className="sign-in-htm">
                            <LoginInputGroup onChange={this.onInputChange.bind(this)} inputId="login_email" label="Adresse e-mail" type="text" />
                            <LoginInputGroup onChange={this.onInputChange.bind(this)} inputId="login_pass" label="Mot de passe" type="password" />
                            <div className="group">
                                <input type="submit" className="button" value="Connexion" />
                            </div>
                            <div className="hr"></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

class LoginInputGroup extends Component {
    render() {
        return (
            <div className="group">
                <label forHtml={this.props.inputId} className="label">{this.props.label}</label>
                <input onChange={this.props.onChange} id={this.props.inputId} type={this.props.type} className="input" data-type={this.props.dataType} />
            </div>
        );
    }
}

export default Login;