import React, { Component } from 'react';

import contactBanner from '../img/contact-banner.jpg'

class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <center>
                    <img src={contactBanner}  alt="" className="img-responsive"/>
                    <br/>
                    <p>
                        We’d love to hear from you. <br/>
                        Please use the contact form below, or send us an email, and we will respond as soon as possible.
                        We are also available at 887-221-0010, Monday through Friday, from 7:30am to 4:30pm EST.
                    </p>

                    <div className="contact-form">
                        <div>
                            <p>
                                <span className="contact-title">Customer Service</span><br/>
                                hello@slimjo.com
                            </p>
                            <p>
                                <span className="contact-title">Workshop</span><br/>
                                1088 Edgy Lane
                                Smith, Georgia 34500
                                887-221-0010
                            </p>
                        </div>

                        <div>
                            <form>
                                <div className="form-row clearfix">
                                    <div className="onehalf first">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name"/>
                                    </div>
                                    <div className="onehalf">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                </div>
                                <div className="form-row clearfix">
                                    <div className="onehalf first">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="number" className="form-control" id="phone"/>
                                    </div>
                                    <div className="onehalf">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" className="form-control" id="subject"/>
                                    </div>
                                    <div className="form-row clearfix">
                                        <div className="textArea">
                                            <label htmlFor="message">Message</label>
                                            <textarea id="message" rows="10" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="btn-submit">
                                        <input type="submit"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </center>
            </div>
        )
    }

}

export default Contact;
