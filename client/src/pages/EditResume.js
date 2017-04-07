import axios from 'axios';
import React, { Component } from 'react';

import '../styles/edit-resume.css';

class EditResume extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div className="EditResume">
                Saisir votre cv...
            </div>
        );
    };
}

export default EditResume;