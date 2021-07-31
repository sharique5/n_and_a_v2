import React from 'react'
import {BiMobile, BsGeoAlt, HiOutlineMailOpen} from "react-icons/all";
import emailjs from 'emailjs-com';
import '../stylesheets/contactUs.scss'

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            phone: '',
            validationErrors: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            iframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14721.03401763175!2d75.8698257!3d22.7186312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb610966bde90ecc4!2sNair%20%26%20Associates!5e0!3m2!1sen!2sin!4v1625285673329!5m2!1sen!2sin" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
        }
    }

    onNameChange = event => {
        this.setState({name: event.target.value})
    }

    onEmailChange = event => {
        this.setState({email: event.target.value})
    }

    onMessageChange = event => {
        this.setState({message: event.target.value})
    }

    onPhoneChange = event => {
        this.setState({phone: event.target.value})
    }

    validateForm = () => {
        const errors = {
            message: '',
            email: '',
            phone: '',
            name: ''
        }
        let hasError = false
        if (this.state.message.length === 0) {
            hasError = true
            errors.message = 'Required'
        }
        if (this.state.name.length === 0 || (this.state.name.length > 0 && !this.state.name.match("^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$"))) {
            hasError = true
            errors.name = 'Invalid Or Empty Name'
        }
        const phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (this.state.phone.length === 0 || (this.state.phone.length > 0 && !this.state.phone.match(phoneno))) {
            hasError = true
            errors.phone = 'Invalid Or Empty Phone'
        }
        const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (this.state.email.length === 0 || (this.state.email.length > 0 && !this.state.email.match(mailFormat))) {
            hasError = true
            errors.email = 'Invalid Or Empty Email'
        }
        this.setState({ validationErrors: errors })
        return !hasError
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.validateForm()) {
            // <a href="mailto:no-one@snai1mai1.com?subject=look at this website&body=Hi,I found this website and thought you might like it http://www.geocities.com/wowhtml/">tell a friend</a>
            // window.location.assign("mailto:contact@nairandassociates.com?subject=Message from " + this.state.name + "&body=" + this.state.message + "---" + this.state.email + " --- " + this.state.phone);

            let templateParams = {
                name: this.state.name,
                phone: this.state.phone,
                message: this.state.message,
                email: this.state.email
            }

            emailjs.send('service_awej1t3', 'template_1cnyq5d', templateParams, 'user_7OaFZVL0LZ08Q0abrEoEg')
                .then((result) => {
                    console.log("res => ", result.text);
                }, (error) => {
                    console.log("err => ", error.text);
                });

            this.resetForm()
        }
    }

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: '',
            phone: ''
        })
    }

    mapIFrame = () => {
        return {
            __html: this.state.iframe
        }
    }

    render() {
        return (
            <div className="contact-us">
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4">
                        <BiMobile size={42}/>
                        <p>+91-731-4291119</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4">
                        <HiOutlineMailOpen size={42}/>
                        <p>contact@nairandassociates.in</p>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-md-4">
                        <BsGeoAlt size={42}/>
                        <p>Yeshwant Plaza, S-118, Indore, Madhya Pradesh 452001</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-md-6">
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                <span>{ this.state.validationErrors.name }</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                <span>{ this.state.validationErrors.email }</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Mobile</label>
                                <input type="text" className="form-control" value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
                                <span>{ this.state.validationErrors.phone }</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                                <span>{ this.state.validationErrors.message }</span>
                            </div>
                            <button type="submit" className="btn btn-secondary">Send Email</button>
                        </form>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6" dangerouslySetInnerHTML={this.mapIFrame()}>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactUs