import axios from 'axios';
import React, { Component } from 'react';

import '../styles/register.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register_email: '',
            register_pass: '',
            register_passconfirmed: ''
        }
    }

    onInputChange(event) {
        let target = {};
        target[event.target.id] = event.target.value;
        this.setState(target);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state.register_pass);
        console.log(this.state.register_passconfirmed);
        if (this.state.register_pass == this.state.register_passconfirmed) {
            axios.post('http://microcv.5unken.me/Members', {"email": this.state.register_email, "password": this.state.register_pass}).then(
                success => { localStorage.setItem('token', success.data.id) },
                fail => { alert("Vos informations sont incorrectes");
        console.log(fail); }
            );
        }
        else {
            alert("Les mots de passes saisis sont différents");
        }        
    }

    render() {
        return (
            
            <div className="RegisterPage">
                <div className="register-html">
                    <div className="register-form">
                        <form onSubmit={this.onSubmit.bind(this)} className="sign-up-htm">
                            <RegisterInputGroup onChange={this.onInputChange.bind(this)} inputId="register_email" label="Adresse e-mail" type="text" />
                            <RegisterInputGroup onChange={this.onInputChange.bind(this)} inputId="register_pass" label="Mot de passe" type="password" />
                            <RegisterInputGroup onChange={this.onInputChange.bind(this)} inputId="register_passconfirmed" label="Mot de passe" type="password" />
                            <div className="group">
                                <input type="submit" className="button" value="Inscription" />
                            </div>
                            <div className="hr"></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

class RegisterInputGroup extends Component {
    render() {
        return (
            <div className="group">
                <label forHtml={this.props.inputId} className="label">{this.props.label}</label>
                <input onChange={this.props.onChange} id={this.props.inputId} type={this.props.type} className="input" data-type={this.props.dataType} />
            </div>
        );
    }
}

export default Register;