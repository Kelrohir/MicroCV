import React, { Component } from 'react';

import '../styles/view-resume.css';

class ViewResume extends Component {
    render() {
        return (
            <div className="ViewResume">
                <InformationBlock />
                <ExperienceBlock />
                <TechnicalSkillBlock />
                <FunctionalSkillBlock />
                <EducationBlock />
                <OtherInfosBlock />    
            </div>
        );
        
    }
}
class InformationBlock extends Component {
    render() {
        return (
            <div className="ViewResume-InformationBlock">
                <Information  title="Information">
                    <p>Céline BONOBO</p>
                    <p>Expérience Interconnect, Développeur</p>
                    <p>Francaise, 25 ans, permis B
                    <br/>Diplôme BTS SIO</p> 
                    <p>XXX Cours de la Libération et du Général de Gaulle XXXX XXXXX</p>
                    <p>celine.bonobo@gmail.com 
                    <br/>06 12 74 88 88</p>
                </Information>
            </div>
        );
    }
}

class Information extends Component {
    render() {
        return (
            <div className="ViewResume-InformationBlock">
                <h3>{this.props.title}</h3>
                <h3>{this.props.children}</h3>
            </div>
        );
    }
}

class ExperienceBlock extends Component {
    render() {
        return (
            <div className="ViewResume-ExperienceBlock">
            <Experience title="Bull (alternance)">
            <br/> <font size="1"><b>Gestion de configuration</b>, <i>2004-2005</i></font>
      <br/> Administrateur Linux. Développements php et maintenance d’une base de données Postgres SQL. Activités d'administration effectuée dans le cadre de la gestion des projets internes à l’entreprise, sur un outil proche de "Gforge". Maintenance et gestion des outils de suivi de versions. Contact clientèle.
      <br/> <font size="1"> <i> Environnement : PHP, SQL, HTML, Scripts Shell </i>  </font>
</Experience>

            <Experience title="Bull (alternance)">
            <br/> <font size="1"><b>Gestion de configuration</b>, <i>2004-2005</i></font>
      <br/> Administrateur Linux. Développements php et maintenance d’une base de données Postgres SQL. Activités d'administration effectuée dans le cadre de la gestion des projets internes à l’entreprise, sur un outil proche de "Gforge". Maintenance et gestion des outils de suivi de versions. Contact clientèle.
      <br/> <font size="1"> <i> Environnement : PHP, SQL, HTML, Scripts Shell </i>  </font>
</Experience>
                </div>
        );
    }
}

class Experience extends Component {
    render() {
        return (
            <div className="ViewResume-ExperienceBlock">
                <h3>{this.props.title}</h3>
                <h3>{this.props.children}</h3>
            </div>
        );
    }
}


class TechnicalSkillBlock extends Component {
    render() {
        return (
            <div className="ViewResume-TechnicalSkillBlock">
               <TechnicalSkill title="Perl">Perl
                <input type="radio" name="perl1" value="perl1" checked="checked"/>
                <input type="radio" name="perl2" value="perl2" checked="checked"/>
                <input type="radio" name="perl3" value="perl3" checked="checked"/>
                <input type="radio" name="perl4" value="perl4" checked="checked"/>
                <input type="radio" name="perl5" value="perl5" disabled="disabled"/>
                </TechnicalSkill>

                <TechnicalSkill title="SQL-PL/SQL">SQL-PL/SQL 
                <input type="radio" name="sql1" value="sql1" checked="checked"/>
                <input type="radio" name="sql2" value="sql2" checked="checked"/>
                <input type="radio" name="sql3" value="sql3" checked="checked"/>
                <input type="radio" name="sql4" value="sql4" checked="checked"/>
                <input type="radio" name="sql5" value="sql5" disabled="disabled"/>
                 </TechnicalSkill>

                <TechnicalSkill title="Python">Python
                <input type="radio" name="pyth1" value="pyth1" checked="checked"/>
                <input type="radio" name="pyth2" value="pyth2" checked="checked"/>
                <input type="radio" name="pyth3" value="pyth3" disabled="disabled"/>
                <input type="radio" name="pyth4" value="pyth4" disabled="disabled"/>
                <input type="radio" name="pyth5" value="pyth5" disabled="disabled"/>
                </TechnicalSkill>

                 <TechnicalSkill title="C">C
                <input type="radio" name="c1" value="c1" checked="checked"/>
                <input type="radio" name="c2" value="c2" disabled="disabledd"/>
                <input type="radio" name="c3" value="c3" disabled="disabled"/>
                <input type="radio" name="c4" value="c4" disabled="disabled"/>
                <input type="radio" name="c5" value="c5" disabled="disabled"/>
                </TechnicalSkill>

                <TechnicalSkill title="HTML/CSS/Javascript">HTML/CSS/Javascript
                <input type="radio" name="html1" value="html1" checked="checked"/>
                <input type="radio" name="html2" value="html2" disabled="disabledd"/>
                <input type="radio" name="html3" value="html3" disabled="disabled"/>
                <input type="radio" name="html4" value="html4" disabled="disabled"/>
                <input type="radio" name="html5" value="html5" disabled="disabled"/>
                </TechnicalSkill>
            </div>
        );
    }
}

class TechnicalSkill extends Component {
    render() {
        return (
            <div className="ViewResume-TechnicalSkillBlock">
                <h3>{this.props.title}</h3>
                <p>{this.props.children}</p>
            </div>
        );
    }
}
class FunctionalSkillBlock extends Component {
    render() {
        return (
            <div className="ViewResume-FunctionalSkillBlock">
               <FunctionalSkill title="Analyse fonctionnelle ">Analyse fonctionnelle
               <input type="radio" name="af1" value="af1" checked="checked"/>
                <input type="radio" name="af2" value="af2" checked="checked"/>
                <input type="radio" name="af3" value="af3" checked="checked"/>
                <input type="radio" name="af4" value="af4" disabled="disabled"/>
                <input type="radio" name="af5" value="af5" disabled="disabled"/> 
                </FunctionalSkill>

                <FunctionalSkill title="Receuil et analyse du besoin ">Receuil et analyse du besoin 
                <input type="radio" name="ra1" value="ra1" checked="checked"/>
                <input type="radio" name="ra2" value="ra2" checked="checked"/>
                <input type="radio" name="ra3" value="ra3" checked="checked"/>
                <input type="radio" name="ra4" value="ra4" disabled="disabled"/>
                <input type="radio" name="ra5" value="ra5" disabled="disabled"/>
                 </FunctionalSkill>
                 
                <FunctionalSkill title="Travail en équipe ">Travail en équipe
                <input type="radio" name="radio1" value="radio2" checked="checked"/>
                <input type="radio" name="radio2" value="radio3" checked="checked"/>
                <input type="radio" name="radio3" value="radio4" checked="checked"/>
                <input type="radio" name="radio4" value="radio5" checked="checked"/>
                <input type="radio" name="radio5" value="radio1" disabled="disabled"/>
                </FunctionalSkill>
                
            </div>
        );
    }
}

class FunctionalSkill extends Component {
    render() {
        return (
            <div className="ViewResume-FunctionalSkillBlock">
                <h3>{this.props.title}</h3>
                <p>{this.props.children}</p>
            </div>
        );
    }
}

class EducationBlock extends Component {
    render() {
        return (
            <div className="ViewResume-EducationBlock">
                <Education starDate="2004" endDate="2005">1ère année DEST génie informatique option « Réseaux et Systèmes »</Education>
                <Education starDate="2003" endDate="2004">BTS en informatique et réseaux</Education>
            </div>
        );
    }
}

class Education extends Component {
    render() {
        return (
            <div className="ViewResume-EducationBlock">
                <div className="dates">{this.props.starDate} - {this.props.endDate}</div>
                <h3>{this.props.children}</h3>
            </div>
        );
    }
}

class OtherInfosBlock extends Component {
    render() {
        return (
            <div className="ViewResume-OtherInfos">
                <OtherInfo title="Musique">Guitare</OtherInfo>
                <OtherInfo title="Voyages">Avion, hiking</OtherInfo>
                <OtherInfo title="Vélo">VTT, route (BRA,CMV)</OtherInfo>
                <OtherInfo title="Plongée">OpenWater</OtherInfo>
            </div>
        );
    }
}

class OtherInfo extends Component {
    render() {
        return (
            <div className="ViewResume-OtherInfo">
                <h3>{this.props.title}</h3>
                <p>{this.props.children}</p>
            </div>
        );
    }
}


export default ViewResume;