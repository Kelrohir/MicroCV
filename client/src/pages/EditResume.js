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

class EducationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: '',
            end_date: '',
            title: ''
         }
    }

    onSubmit(event) {
        event.preventDefault();
        axios.post('http://microcv.5unken.me/Resume/{id}/education', {"startDate": this.state.start_date, "endDate": this.state.end_date, "title": this.state.title}).then(
            success => {},
            fail => {}
        );
    }

    render() {
        return (
            <div className="EditResume-EducationForm">
                <form onSubmit={this.onSubmit.bind(this)} className="Education-Form-htm">
                        <EducationFormGroup onChange={this.onInputChange.bind(this)} inputId="start_date" label="Date de début de la formation" type="text" />
                        <EducationFormGroup onChange={this.onInputChange.bind(this)} inputId="end_date" label="Date de fin de la formation" type="text" />
                        <EducationFormGroup onChange={this.onInputChange.bind(this)} inputId="title" label="Intitulé de la formation" type="text" />
                        <div className="group">
                            <input type="submit" className="button" value="Soumettre" />
                        </div>
                </form>
            </div>
        );
    };
}

class EducationFormGroup extends Component {
    render() {
        return (
            <div className="group">
                <label forHtml={this.props.inputId} className="label">{this.props.label}</label>
                <input onChange={this.props.onChange} id={this.props.inputId} type={this.props.type} className="input" data-type={this.props.dataType} />
            </div>
        );
    }
}

export default EditResume;