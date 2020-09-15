import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import '../styles/styles.css';
import Input from './Input';
import Button from './Button';
import TextArea from './TextArea';
import Input2 from './Input2';

class Index extends Component {
    constructor (props) {
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
            }
        }
    }

    handleInputChange (event) {
        event.preventDefault()
        const target = event.target;
        const name = target.name;
        const value = target.value

        this.setState({[name]: value});
    }

    validateMail () {
        let errors = {};
        let formIsValid = true;

        // if (!this.state.name || this.state.name.length < 3) {
        //     errors.name = "Minimum 3 symbols";
        //     formIsValid = false;
        // }

        // if (!this.state.message || this.state.message.length < 10) {
        //     errors.message = "Minimum 10 symbols";
        //     formIsValid = false;
        // }

        // if (!this.state.email || this.state.email.length < 3) {
        //     errors.email = "Minimum of 3 symbols";
        //     formIsValid = false;
        // }

        // this.setState({
        //     errors: errors
        // })

        return formIsValid;
    }

    sentMessage (event) {
        event.preventDefault()

        if (!this.validateMail()){
            return;
        }

        var templateParams = {
            from_name: this.state.name + '(' + this.state.email + ')',
            to_name: 'Long',
            subject: this.state.subject,
            message_html: this.state.message,
        }

        emailjs.send('contact_service', 'template_CcYeWkv5', templateParams, 'user_J1BDkVHh8QTjNGT1n94LV' )
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        this.setState({
            name:'',
            email: '',
            subject: '',
            message: '',
        })
    }

    render () {
        return (
            <div className="body">                
                <div id="intro" className="intro">
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
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                    <img className="moon" src="https://i.imgur.com/C4TF785.png" height="200px" width="250px"></img>
                    <div className="headshot-about-container">
                        <div className="container">
                            <img className="headshot" src="https://f0.pngfuel.com/png/741/271/baby-bugs-bunny-illustration-png-clip-art.png"></img>
                            <a href="https://www.linkedin.com/in/long-phun-65bb8b191/" target="_blank"><img className="icon1" src="https://i.imgur.com/8xVVTii.png"></img></a>
                            <a href="https://github.com/longphun1" target="_blank"><img style={{ borderRadius: "25px" }} className="icon2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEUAAAD////8/Pz6+vr39/fz8/OHh4fu7u5XV1fa2trj4+Otra3m5ubd3d1RUVHs7OwhISHNzc27u7sTExPFxcVubm60tLSXl5cmJiaBgYEtLS1hYWHHx8fT09OOjo5KSko5OTlCQkIcHBxycnKkpKQNDQ1xcXFfX1+UlJQ9PT0zMzOfn597e3sRERErKytoBiGVAAAS30lEQVR4nOVd55qizBJ2kaCgKEgUQUQYAzj3f3lHxgGVqg4o4HzPef/tjmIX3V05jEZ9I0uWXjwJ9oUvy3JR7G37cNC3u9P52/OWySrrfQE9YnXeHuxIM2b/CBBnoaUd7cnO+/RSX8C3vo9SSyXR9gRh6rh+sF19es38uOh+ak5FLupqLELHtdefXjoPVra2mUrtqKswM8xo+2kCGAic+UJ4jbwbJDVMd5+mgoidtmh5NFEIUuj/RQ67jogs8xVYh7/FeM6B0yV5P1ByfflpuirokdE5fSUk5+v8adpKHNJ5L/SVEC05/jR9gcYn1V/F2Mg/ylq3TqfsBadx7n5MqUtSpXf6Sghq8RkC5Rc1l1eg6oOT5331e/8ArEkyJH2JvRmWvitEbcB9PKWLdqsTpNk8NDaWaZqOY5qWZYRTVWmrwE7loVSAooWAFxahmbpRYU+28frHpM8ul2R53ulBEbmps1FbqLKiOcg2ehovBx1PnWgfbNcUNXp5mth+bnHLnHnUP4H2lO9wzbRicuI7Vav17iBbfJxZtHo2IBON51AJ0+jU1sWUJQeN63Yrfj+k3TAJ2dQphv8yQ4hzHveA1p8+XjDvixK+q0bqGtvDY/TEcDyX8dOCahYdiOVzZLGOq7rvwwmwZRi5QugeOvpd74tlkUl59245m3EFDb9LK+cyiei/Nza75qmMK2js445/cLSL6Jpv2O1lLKgsTi16UafinP6rXe5iRP2l/gTUMqXRKE66+p2VS/mZhdarVXOi6Tpi0M2PrFPyb0hWRz9Chk9RE6Xi0sEvxBQpMYg9s6Wo+kr0/gmKTeIrHMomXe7JkkOJ3t1FTyMSqH4N5pM+kTnBu4p4lhMJtAb1R9vEkyrZbz34SHyu3NHSebEjOhbGhzceKxMeKkx7Z6EAnkaSG+Lron9PemudK4U8yIjxu5e9qXvC2R/3aIJSQdT+w9fe+IGg+Y6PH4vrbUmX8SW2FxOcvuLQPOYRO4vw1vP2IeOVhj9L+lCU5BckDeuFZclj9EnKvodlt8GSoIIs2hoaBAmrvideu0CW4+6iMG71mN0UJ/Crn1W3g4sLRqfVQ0z0GbNPH9FfuPhBbePxx236j9/BGrjFKvGrb1v0Eop/hsBRgjN6g9tYRCXhuNd4QUuc0Ws0zjm/fsQEhRD9qVyzGBX9Mz6DYIIpuEL+pwi8GsXoQdvwuMI97O0IDjGnJd77/j7Qz134hDAksR7s5ahoutQDzPEvHDk2IsIE6uZE+nj280Ik1cr9oHuTwzvI6Ub9kX9Wk0Qf44cqm5/q2KtRySqRX39ofKUy6HQn9chUa9EH7wnqvDFZhs8KEzVjsiqTPSk/wszqTusJnPnTcZo27dwVxlAFll6pY2c0JX9+3/y8sulGdZ1YzXRqKK7W2HmbMh6MvRaVYnshn5ec+D3iRqUFgbxpGD+YYPtBV0wmyDdEihcEfYtXI/k9T3QSoUrVFPoqMFeZRH02YlIILoUB24R4NGB8bTAhGPIK5JOobkPTbArk85uY8gVUtJSYE27jyjvH8W63O8Vrj7DRBTHCjZy/AHEmLciv10OerVIVoRz3BJQ/0zipyc72yzQv07I2xhWWaTqpKxfBrnHLCdZfCcRDlB3hOxY04noRu2tM19YocSkpryXT+cvVrHAmic3nC6KihlYaBbWylZHf2b9/2H1ZI0eaqJ7GyC0MicrMD3BL+QYxLUlcHVxrrlDzVARxMTX9m0KU0j6ZYkwdU6NJ5r4LX59EN5kyGoXX07K2TVWkbMoDRGUjf48IPphq4ejNRWxFgu4WI+5Wi0ogg8IrjVzE1RBn9LdhohSukE3EdZQIPl5heMtZFHYMQsoAIgGAhlfijFxZMlP6RffFQDRoBOUK4R+YV8qGV0BiFjqQI8R9AOU05dLhKqYx+BTm3GG7PdJBKSSZt5iRATWOLRS0C/gemmClK3YLYkwogMuwwNtAdFiXSeCgVSUUq2GNbGLTY3OBCtuMI+z41bIs4S1QUqAKKAea+7OFD6TZFPXXhqycmZF9KYhzUWx8BLJ9Lt/jEo/g9IOQYpIhRk5j/XCXHa5Y9pDVQSbFGbqDIf5nfSwAf1f4gqrOgOKCJA5/kII9Up40IHiMDT7nJxoB6AcCNYEAmhji4x6tgF9EoPjXHnEYTiAu6E48aDc8HlPgE/w340zC8YYpIy3BSJqBhsP8+/5XKDAZZtMd7CqaroBbhzWWQDQ/5N5BcS9yBwsHsy4ElpYMt8ms/3YAt3TBXT6Nued6AZO5H8BXjJoK6P3hPqSjeBDy/qH+4AYAS7g7M6Cs4I89wDfXE9hBenBhhMoOhvqAwB3wXQ3GaWbMt26D71Q+igJsLyt+c8eAJjA5SvuLNVhL5a+HIUPu9ENy+nUPSBnn9ALO0+KmfSeQ4fPGVTAHZH8QWdwUZqXfhB7MEV9wBscuNBd8D5gzzmkAjunNDA6ANHQ4GQ0pi7g3MJTlHVjPLYUEymxOheZ7WG/pFWP69fGAWjP9+QJM0+NMRkU8rH3DpC4oA9kZQkkKdJRSIoyPWA3f/YNVWuGDL5RCFPJDi6+KGPoFBgBdnbSBc7OUezr4X8689/4aYFGgUP1jWyAR0wzbCj55rw9CEQA11/kbsBprhZT+CHyZsoMz0hvmtJuYAfVstkTc+fSDUOE8pLf7AfSiuSOQ+d9I/hvbECsRDRp1egAeCP6FD5jKaZQBYWHFPBQSsnr6BzW/0gb6mY7E3ric3af+W9GRQCs6mAAGHyByO+XRSocNqz2BnK6MGfP+KAH/xxE2HDq8/QQanzgD9UUeJSB6dOQgcPWxa0jn9R44kfJo2bQ4BJ7imtNwjmAIiiG8BG9ehq5irgpKyLMGBCV0C/mmPPKaLIOrugnNkx8KlF4jMIXpSmGTZTBCPDcQ80qHgElhpkCXRChk+yVHxPq4YWBQrDseCukps7+gNHTpH+EQFBLKoIcBbQ/Bwv4vKeTKMvlPU8jFSz9KIe0ecu0hD4Uf5TTv7iGXxEdSwoeDRZGHGIVNnYar/8JHJT7NgEUoBHrpmEcv/ataG0rhS7bFX9W8MYn/mn24HTInsQnaIcMofMnGX3/QPhxTmD1mPVH9NMnOlnPHNCxHc+Xi8NC4+gNRmQo0n/A3WFeBUG2dR5k38VMD5yaLqaW5x48ELW4w9kXuGKp0Z+eiohpmKusJ6muD/lLBMn9oE6SFGppp7rpuqjlWOJ3P1dlCkT4pKGoIoqQsZr8oF/Uj1qchkNM6XvOtzEPLiQIQNl958Tbwc8fahJ/zJopzw9Ki/WF7OnvLEt+n7eQrcjahipy6GCtDmKbFlpWrkH0oMHN9+ynpHiZbpOO/h7WdgwIxW36ff7H2vJ/w4gdC3Dcom3LAQg1NS/PIrypRgb6sLlnxw0z3UysMp48Iw9DSYF715yCWwyXM4wRRacr4oQ4O7z0G7FuzuvxTuKL3tXJAddzIvyE63njg7IfPCNIsBCG/ssiXGMcPrPJ742lq78rJFCWSpbeOr/faLo6a8Rl6keBall2W8UTeYPemTJxJwNlVdiNPz69bK821gKwDfsQKVmklBDbMYPrRf2A+TeQb5RAAjd4J5fQJgUFVKWHizPgnNQjNY55re6bA+IChP6cu6gx0tlspOszy/qe4PGlR2+FVN7r/YQcYzS3WeIJiki+xLZOHlon0pC8kI/tmCb6eX4oVNvYJlbEuqJ79bhW8T7ytMvVBDWGR0b8IBp5+c4SRbroGJ4WDejOY7hUPXJoqzxsGdMe8FA6YsSBorBwRqH/W/QTgdeKvtxjKcyqYMWsp5HoLpOacwbQeQe7a3ik4uhaB43QPMsHqxMU37VFPWA2Szr5hE0ire8oAS+RyC/8iQdr8dE4gR0UrrXYN+eOGn8JRVvSdp0irca4Am7g8pjF+wRrSVq2VYW5ulxB5OgMgzasfa0gzIBG5m53e4Dn9XcY5n/5BrwNGjilnLXcNtyfZL3FOdQzATXkuIoJ8qPXsj8DsIR4lhD5nO3mYSvhcjz+C7JCvp8IDvL3ZtYIzdXlrzBBO0ChcgC4Jzp68jzjbZpeCY37kn1vB7ovxYm+TJpZ6ZzSGRcy/AGSQQ7O3yQXaQc9zzTLZMjbmccI8u+to/r4eJ1rtxo5w9KdBSoaeQ6VVzqySTph3f6LNQQPBFtQtyt50rYC1FgSyAOnD/twnqm6kOc7Z5QqrvRMuXhCRY0W1ovadQW34U7BPFHSbNnt9eXWnlpBnSObazs1w0Wae8Sw08+KViTEJEq9FfFaw7uuf1GjQWccqZjKXlFrt9rKrWSr7xIpTM5XtZqNPXiAzjaZIQS12lhtVqUnduLGFPpB4HObV1Pbe6PmOeDXRdAvEN9jsm5jUi1X4vQBo8/QGxukbjcCRLZyjrBjWKsCCxkvdYYDVNLLGhM8fx9nxB0HC3fsS0wtgF5ea3ah8Wh3HGOg3SUSi0aTaKCxJBsynuedzMPu7l9D5LccX50gFiMJPLMNE2lqJoGT2XvTO6uIwQiMGREgvNazHGOSCqFLDDDAs3bTupSnmLBLXrRKLcPbAwBEKOYFSSfuF/C7s513rBtKRLsBgBwAqBKe9PMTaOig0pQi5NQIQLfee0ZJLY/ItCXxl4iYaG6I6YLACbQkcnv196ASlWLE1gfTOiCiwvvpNs6kBLBFo1rxuj9FkUhe17PCK/63lCDy0Hx7DcYW0okWY7+Ppl1y9mXedLU8Bdd40Ee2cmGest8qc8SV0RgmIaz33hp858ldwg23vCz/KtfBVS7/NSCJ0Rgk7qITOmQE1GI0cYeE3T3BRZgm+5TldsJpBPQCfM8PuNIdGBMEw+t6S9fk90bCB1z/qzJ8aKAsUrMa7XfbVIUrhJRCbbPFvzDPvCZ/ZBUoAemvryclr8FCJxefgwaNlTedi3hOFfA0N8blrHPOsbkC1SdACtqdkdoWnKeUaTeAdc7USKIHPPxw3RCk28KMDCByqG2H+4YbfUYDPsGxWRHEbt+3APqaEjDqljbrAN4dUt/rIUpizLGvSSPtWJjRplmyDxDjqIb7NmuxLGpfLHMbxDMw38A/uYrZ1O6eR3kVoRJpF0zakS5zpDDT3VaCFSpenld5oOyF4X9vp7CUuhM6kooxpDdky3m71SQWdKiyVeahS9AXKQKqrmOhwXDhptrpw5ODJsB3s/RWZV4sy8SlNJSluFtLgccbgLQJgldQvcrZqRKawct6hevMN5JSzLaktjvnagFDSYDzBYfq7yRTWc4rIwpRIYUD6jvFKxOpnnQQGIhgs/Y9MYe31IHtxYOjvhj3pUFG71NGBBIZvaApGKoXKI/erLc0nnvjEeDaos+ZyJJ1r6Z1hi7j6Vi6JruTeKRw7u6VX3CmoKXwIdZlb7/zwT5TCmLjn0BfYCrBNXwWqhK0p/BXfd12+PqV3qm8vy6vNUgNR20g8gbcJIhkJuUZN3ZMVyJrCSrbVh8GojlSdLVg5x+q3ACmMyR1/OGepULDWiCSKGvF81BRWGljdprmmsI6qV468pHKMGA0LcWWTXSYKqoC0w5nSdj2UCdtYU1gtf1KdsprCoKKw4su16yd8lre7lKz6LvgSChhYwkbgNSQTVwdrCiuGpFc6TE3hoaKwuph3Cp/yZX1YvVxD4UkK4UBG5KjlW0RDbGQK61DWpKKw8uLVFD7OvdsaFN+5xOuWYQMLgNRQEWvnPQprz2Wi0WIDyntiorFiau6o6je9RzWFlSVEobA6kzWFlYpyzqmxDyxl5g180RvMh/tn6fgWhTe/9S6i/qTwsi5KQkB3cgtW8ag7kSm0qldBprAMrG8juidPdLrdwRI7RsvSsfFQllmHyyGFFUE1hRXJNYVSNMkZbrzFsW0GMw+SiBESFOZO8ctY68rbSqehUAg4zT+VlQlHmvr9Nmxm/pYSuj9bUsuXyl5vRSELVtdX8I4t25MvKJv95Z42zkFhtdyEl8K0ZX5tK1zoDPwX43ltNwAK6whmTeHt9marCd88kKZDs3MEYSvPYeWRoFC4H523gcxZrSGa3fPQJlYURRgiDPRzyX3qgaV1Nlw9k2GTb7ifOH0x+a0l7E2LUL00tbT8KNfuf+ucXRLvumsvjBKWzHf8FW0Qty5yEmuv+MIyTdMyQrV9Ngp3hVAHuBwGrsS/QiL2FuoHy2DgnnSmPtwGVqB4rTsH30SKzpG5i0HquMfzvkUgGSet/6ld42kvWjY3Jlq/91Ew3P5FPAM6y9J5A6IVvRZU6hg7edPLfZSc/Z+gr8R6QgiuvwE10j96/wCSfacXcjN5o0yoN6yPc6mD4zqWQv8vknfDzp3O3jqvkmrIfIPtPgf9aBqvdR8Yzw1HHsp6eA9n23U27agUr0ZWxC6j/kNYnQ5FpBlcpq1q5fJe/zOCoQ2SeHuw5dyaE2xBZWrmvj3Znoc3GzpFtkqW3+fdJNgX8g1+8RXoZY/cZNVNdIyG/wG4U24oslRZWgAAAABJRU5ErkJggg=="></img></a>
                        </div>
                        <div className="aboutMe">
                            <h1 className="info">Hello, my name is Long Phun.</h1>
                            <h2 className="info">I am a experienced Full Stack Developer with more than 1000 hours working with Python, Java, and MEAN frameworks. Learned how to code in mutiple languages and work with different databases. Passionate about going into the software development industry and learning something new everyday.</h2>
                        </div>
                    </div>
                </div>
                <div id="skills"></div>
                <div className="skills-container">
                    <div className="skills">
                        <h1 className="skill-title">Skills</h1>
                        <div className="languages">
                            <h2 className="text1">Languages</h2>
                            <h3 className="text">Javascript</h3>
                            <h3 className="text">Python</h3>
                            <h3 className="text">Java</h3>
                            <h3 className="text">HTML/CSS</h3>
                        </div>
                        <div className="frameworks">
                            <h2 className="text1">Frameworks</h2>
                            <h3 className="text">Angular</h3>
                            <h3 className="text">Django</h3>
                            <h3 className="text">Flask</h3>
                            <h3 className="text">Spring</h3>
                            <h3 className="text">Express</h3>
                            <h3 className="text">Bootstrap</h3>
                        </div>
                        <div className="databases">
                            <h2 className="text1">Databases</h2>
                            <h3 className="text">MySQL</h3>
                            <h3 className="text">MongoDB</h3>
                            <h3 className="text">Firebase</h3>
                        </div>
                        <div className="other">
                            <h2 className="text1">Other</h2>
                            <h3 className="text">React Library</h3>
                            <h3 className="text">AWS Deployment</h3>
                            <h3 className="text">Heroku Deployment</h3>
                        </div>
                    </div>
                </div>
                <div id="projects"></div>
                <div className="projects-container">
                    <div className="projects">
                        <h1 className="project-title">Projects</h1>
                        <div className="project">
                            <a className="doctor-app-link" href="http://54.67.60.238/" target="_blank"><img className="image1" src="https://i.imgur.com/ZAjgkZ0.png"></img></a>
                            <h2 className="project-summary">A software application thats allow patients to register a account to make appointments and make payments online. Allow one user to be the admin to see all patients and appointments.</h2>
                            <h2 className="tech-used">Tech Used</h2>
                            <h3 className="tech-used" style={{ marginBottom: "7%" }}>Javascript  |  Angular  |  MongoDB  |  Bootstrap</h3>
                            <a className="view-github" href="https://github.com/longphun1/doctor_appointments" target="_blank">View GitHub <img style={{ borderRadius: "25px" }} class="view-icon" src="data:image/png;base64,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"></img></a>
                        </div>
                        <div className="project">
                            <img className="image2" src="https://i.imgur.com/OZC7mZh.png"></img>
                            <h2 className="project-summary">Blog application where a user can register and create new posts for others to see. A different user can view other people's posts and leave comments.</h2>
                            <h2 className="tech-used">Tech Used</h2>
                            <h3 className="tech-used">Java  |  Spring Tool Suite  |  MySQL  |  </h3>
                        </div>
                    </div>
                </div>
                
                <div className="contact-container">
                <div id="contact"></div>
                    <div className="contact">
                        <h1 className="contact-title">Contact</h1>
                        <h3 className="contact-text">Have a question or want to chat? Don't hestitate to reach out to me!</h3>
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
                                // required='required' 
                                onChange={this.handleInputChange.bind(this)}
                                value={this.state.name}
                                error={this.state.errors.name}
                            />

                            <Input2
                                type='email'
                                name='email'
                                className="form"
                                // required='required'
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
            </div>
        )
    }
}

export default Index;