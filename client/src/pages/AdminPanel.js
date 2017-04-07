import axios from 'axios';
import React, { Component } from 'react';

import '../styles/admin-panel.css';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: []
        }
    }

    componentDidMount() {
        axios.get('http://microcv.5unken.me/Members', { headers: { 'Authorization': localStorage.token } }).then(
            success => { this.setState({ members: success.data }); console.log(this.state.members) },
            fail => {  }
        );
    }

    // onInputChange(event) {
    //     let target = {};
    //     target[event.target.id] = event.target.value;
    //     this.setState(target);
    // }

    // onSubmit(event) {
    //     event.preventDefault();
    //     axios.post('http://microcv.5unken.me/Members/login', {"email": this.state.login_email, "password": this.state.login_pass}).then(
    //         success => { localStorage.setItem('token', success.data.id) },
    //         fail => { alert("Vos identifiants sont incorrects"); }
    //     );
    // }


    render() {
        return (
            <div className="AdminPanel">
                <AdminTable members={this.state.members}/>
            </div>
        );
    };
}

class AdminTable extends Component {
    render() {
        return (
            <table className="AdminTable">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Mail</th>
                        <th>Role</th>
                        <th>Modif Role</th>
                    </tr>
                </thead>

                <tbody>
                    <tr><td>{this.props.members.email}</td></tr>
                </tbody>
            </table>
        );
    }
}

export default AdminPanel;