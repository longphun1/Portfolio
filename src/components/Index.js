import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import '../styles/styles.css';
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import Input2 from './Input2';
import MessageModal from './Modal';

class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            errors: {
                name: '',
                email: '',
                subject: '',
                message: '',
            },
            messager: undefined
        }
    }

    removeModal = () => {
        this.setState(() => ({ messager: undefined }))
    }

    handleInputChange(event) {
        event.preventDefault()
        const target = event.target;
        const name = target.name;
        const value = target.value

        this.setState({ [name]: value });
    }

    validateMail() {
        let errors = {};
        let formIsValid = true;

        if (!this.state.name || this.state.name.length < 1) {
            errors.name = "Please enter your name";
            formIsValid = false;
        }

        // if (!this.state.message || this.state.message.length < 10) {
        //     errors.message = "Minimum 10 symbols";
        //     formIsValid = false;
        // }

        if (!this.state.email || this.state.email.length < 1) {
            errors.email = "Please enter an email";
            formIsValid = false;
        }

        this.setState({
            errors: errors
        })

        return formIsValid;
    }

    sentMessage(event) {
        event.preventDefault()

        if (!this.validateMail()) {
            return;
        }

        var templateParams = {
            from_name: this.state.name + '(' + this.state.email + ')',
            to_name: 'Long',
            subject: this.state.subject,
            message_html: this.state.message,
        }

        emailjs.send('contact_service', 'template_CcYeWkv5', templateParams, 'user_J1BDkVHh8QTjNGT1n94LV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            messager: this.state.name,
        });
    }

    render() {
        return (
            <div className="body">
                <div className="navbar">
                    <nav>
                        <ul>
                            <li><a className="nav" href="#intro">Intro</a></li>
                            <li><a className="nav" href="#skills">Skills</a></li>
                            <li><a className="nav" href="#projects">Projects</a></li>
                            <li><a className="nav" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div id="intro" className="intro">
                    <div className="headshot-about-container">
                        <div className="aboutMe">
                            <h1 className="info">Hi, my name's Long Phun.</h1>
                            <h2 className="info">I am a software developer, passionate about learning something new everyday.</h2>
                        </div>
                        <div className="container">
                            <a href="https://www.linkedin.com/in/long-phun-65bb8b191/" target="_blank"><img className="icon1" src="/images/linkin-icon2.png"></img></a>
                            <a href="https://github.com/longphun1" target="_blank"><img style={{ borderRadius: "25px" }} className="icon2" src="/images/github-icon.png"></img></a>
                            <a className="resume-link" href="https://resume.creddle.io/resume/el4rrtd0w2l" target="_blank">Resume</a>
                        </div>
                    </div>
                </div>

                <div id="skills"></div>

                <div className="background-image">
                    <div className="skills-container">
                        <div className="skills-box">
                            <div className="skills-inner-box">
                                <h1 className="skill-title">Skills</h1>
                                <div className="skills-sections">
                                    <h2 className="skills-section-title">Languages</h2>
                                    <img className="skills-icons-resize" src="/images/languages.png"></img>
                                    <h3 className="text">Javascript</h3>
                                    <h3 className="text">Python</h3>
                                    <h3 className="text">Java</h3>
                                    <h3 className="text">HTML/CSS</h3>
                                    <h3 className="text">SCSS</h3>
                                </div>
                                <div className="skills-sections">
                                    <h2 className="skills-section-title">Frameworks</h2>
                                    <img className="skills-icons" src="/images/framework.png"></img>
                                    <h3 className="text">React</h3>
                                    <h3 className="text">Django</h3>
                                    <h3 className="text">Spring</h3>
                                    <h3 className="text">Angular</h3>
                                    <h3 className="text">Flask</h3>
                                    <h3 className="text">Bootstrap</h3>
                                </div>
                                <div className="skills-sections">
                                    <h2 className="skills-section-title">Databases</h2>
                                    <img className="skills-icons-resize2" src="/images/database.png"></img>
                                    <h3 className="text">MySQL</h3>
                                    <h3 className="text">MongoDB</h3>
                                    <h3 className="text">Firebase</h3>
                                    <h3 className="text">SQLite</h3>
                                </div>
                                <div className="skills-sections">
                                    <h2 className="skills-section-title">Other</h2>
                                    <img className="skills-icons" src="/images/others.png"></img>
                                    <h3 className="text">AWS Deployment</h3>
                                    <h3 className="text">Heroku</h3>
                                    <h3 className="text">Restful API</h3>
                                    <h3 className="text">Webpack</h3>
                                    <h3 className="text">Babel</h3>
                                    <h3 className="text">Jest</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="projects"></div>
                    <div className="projects-container">
                        <div className="projects">
                            <div className="project">
                                <img className="image1" src="https://i.imgur.com/ZAjgkZ0.png"></img>
                                <h2 className="project-summary">A software application thats allow users to register a account, make appointments, and make payments. Allow one user to be the admin to see all patients and appointments.</h2>
                                <h2 className="tech-used">Tech Used</h2>
                                <h3 className="tech-used">Javascript  |  Angular  |  MongoDB  |  Bootstrap</h3>
                                <a className="view-site" href="http://54.67.60.238/" target="_blank">View Website</a>
                                <p className="projects-or">|</p>
                                <a href="https://github.com/longphun1/doctors-app" target="_blank"><img className="github-icon" src="https://i.imgur.com/GdNRuHu.png"></img></a>
                            </div>
                            <div className="project">
                                <img className="image1" src="/images/budget-book-snapshot.png"></img>
                                <h2 className="project-summary">Built with react, a responsive website that grant users the ability to login with their Google account and keep track of their spendings. Data storage and Google account authorization are handled with Firebase.</h2>
                                <h2 className="tech-used">Tech Used</h2>
                                <h3 className="tech-used">Javascript  |  React  |  HTML/SCSS | Firebase</h3>
                                <a className="view-site" href="https://lp-expensify-app.herokuapp.com/" target="_blank">View Website</a>
                                <p className="projects-or">|</p>
                                <a href="https://github.com/longphun1/budgetBook-react-app" target="_blank"><img className="github-icon" src="https://i.imgur.com/GdNRuHu.png"></img></a>
                            </div>
                            <div className="project">
                                <img className="image1" src="https://i.imgur.com/OZC7mZh.png"></img>
                                <h2 className="project-summary">Blog application where a user can register and create new posts for others to see. A different user can view other people's posts and leave comments.</h2>
                                <h2 className="tech-used">Tech Used</h2>
                                <h3 className="tech-used">Java  |  Spring Tool Suite  |  MySQL</h3>
                                <a className="view-site" href="https://github.com/longphun1/java-BlogApp" target="_blank">View <img className="github-icon" src="https://i.imgur.com/GdNRuHu.png"></img></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-container">
                    <div id="contact"></div>
                    <div className="contact">
                        <h1 className="contact-title">Contact</h1>
                        <form
                            id={this.props.id}
                            className={this.props.className}
                            name={this.props.name}
                            method={this.props.method}
                            action={this.props.action}>

                            <Input
                                type='text'
                                name='name'
                                className="form"
                                required='required'
                                onChange={this.handleInputChange.bind(this)}
                                value={this.state.name}
                                error={this.state.errors.name}
                            />

                            <Input2
                                type='email'
                                name='email'
                                className="form"
                                required='required'
                                onChange={this.handleInputChange.bind(this)}
                                value={this.state.email}
                                error={this.state.errors.email}
                            />

                            <TextArea
                                name='message'
                                id='message'
                                // required='required'
                                className="form"
                                rows='8'
                                onChange={this.handleInputChange.bind(this)}
                                value={this.state.message}
                                error={this.state.errors.message}
                            />

                            <Button
                                onClick={this.sentMessage.bind(this)}
                                type='button'
                                name='submit'
                                className='submit'
                                required='required'
                            />

                        </form>
                    </div>
                </div>
                <MessageModal
                    messager={this.state.messager}
                    removeModal={this.removeModal}
                />
            </div>
        )
    }
}

export default Index;