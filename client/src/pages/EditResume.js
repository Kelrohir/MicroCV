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
                <PersonalInfoForm />
            </div>
        );
    };
}

class PersonalInfoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            PersonnalInfo_firstName: '',
            PersonnalInfo_lastName: '',
            PersonnalInfo_address: '',
            PersonnalInfo_phoneNumber: '',
            PersonnalInfo_email: ''          
         }
    }

    onInputChange(event) {
        let target = {};
        target[event.target.id] = event.target.value;
        this.setState(target);
    }
    onSubmit(event) {
        event.preventDefault();
        axios.post('http://microcv.5unken.me/Resume/{id}', {"firstName": this.state.PersonnalInfo_firstName, "lastName": this.state.PersonnalInfo_phoneNumber, "address": this.state.PersonnalInfo_address, "phoneNumber": this.state.PersonnalInfo_phoneNumber, "email": this.state.PersonnalInfo_email}).then(
            success => {},
            fail => {}
        );
    }

    render() {
        return (
            <div className="PersonalInfoPage">
                <div className="PersonnalInfo-html">
                    <div className="PersonnalInfo-form">
                        <form onSubmit={this.onSubmit.bind(this)} className="add-personnal-info-htm">
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonnalInfo_firstName" label="Prénom" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonnalInfo_lastName" label="Nom de famille" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonnalInfo_address" label="Adresse" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonnalInfo_phoneNumber" label="Numéro de téléphone" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonnalInfo_email" label="Email" type="text" />
                            <div className="group">
                                <input type="submit" className="button" value="Valider" />
                            </div>
                            <div className="hr"></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

class PersonnalInfoFormInput extends Component {
    render() {
        return (
            <div className="group">
                <label forHtml={this.props.inputId} className="label">{this.props.label}</label>
                <input onChange={this.props.onChange} id={this.props.inputId} type={this.props.type} className="input" data-type={this.props.dataType} />
            </div>
        );
    }
}

_____________________________________________________________________________________________________________________________________________________________________________________

class PersonalExperienceForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            PersonalExperience_startDate: '',
            PersonalExperience_endDate: '',
            PersonalExperience_title: '',
            PersonalExperience_description: ''      
         }
    }

    onInputChange(event) {
        let target = {};
        target[event.target.id] = event.target.value;
        this.setState(target);
    }
    onSubmit(event) {
        event.preventDefault();
        axios.post('http://microcv.5unken.me/Resume/{id}/experiences', {"startDate": this.state.PersonalExperience_startDate, "endDate": this.state.PersonalExperience_endDate, "title": this.state.PersonalExperience_title, "description": this.state.PersonalExperience_description}).then(
            success => {},
            fail => {}
        );
    }

    render() {
        return (
            <div className="PersonalInfoPage">
                <div className="PersonnalInfo-html">
                    <div className="PersonnalInfo-form">
                        <form onSubmit={this.onSubmit.bind(this)} className="add-personnal-info-htm">
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonalExperience_startDate" label="Date de début" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonalExperience_endDate" label="Date de fin" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonalExperience_title" label="Titre" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonalExperience_description" label="Description" type="text" />
                            <div className="group">
                                <input type="submit" className="button" value="Valider" />
                            </div>
                            <div className="hr"></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

class PersonnalExperienceInput extends Component {
    render() {
        return (
            <div className="group">
                <label forHtml={this.props.inputId} className="label">{this.props.label}</label>
                <input onChange={this.props.onChange} id={this.props.inputId} type={this.props.type} className="input" data-type={this.props.dataType} />
            </div>
        );
    }
}

_____________________________________________________________________________________________________________________________________________________________________________________

class PersonalSkillsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            PersonalSkills_title: '',
            PersonalSkills_level: '',
            PersonalSkills_tag: '',
            PersonalSkills_order: ''      
         }
    }

    onInputChange(event) {
        let target = {};
        target[event.target.id] = event.target.value;
        this.setState(target);
    }
    onSubmit(event) {
        event.preventDefault();
        axios.post('http://microcv.5unken.me/Resume/{id}/skills', {"title": this.state.PersonalSkills_title, "level": this.state.PersonalSkills_level, "tag": this.state.PersonalSkills_tag, "description": this.state.PersonalSkills_order}).then(
            success => {},
            fail => {}
        );
    }

    render() {
        return (
            <div className="PersonalInfoPage">
                <div className="PersonnalInfo-html">
                    <div className="PersonnalInfo-form">
                        <form onSubmit={this.onSubmit.bind(this)} className="add-personnal-info-htm">
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonalSkills_title" label="Titre" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonalSkills_level" label="Niveau" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonalSkills_tag" label="Tag" type="text" />
                            <PersonnalInfoFormInput onChange={this.onInputChange.bind(this)} inputId="PersonalSkills_order" label="Ordre" type="text" />
                            <div className="group">
                                <input type="submit" className="button" value="Valider" />
                            </div>
                            <div className="hr"></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

class PersonnalSkillsInput extends Component {
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