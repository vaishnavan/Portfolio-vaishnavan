import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Navbar from '../navbarMain/Navbar';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './contact.css';

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
        let timer = setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000)
        return () => clearTimeout(timer);
    }

    render() {
        const { loading } = this.state;
        return (
            <>
                {loading &&
                    <Loader
                        className="loader"
                        type="Grid"
                        color="#002db3"
                        height={50}
                        width={50}
                    />
                }
                <Navbar toggleBar={this.props.handleClick} modechangeData={this.props.modeChange} />
                {!loading &&
                    <div>
                        <div className="contact_topNav" >
                            <div style={{ padding: "10px 0" }} className="contact_main">
                                <h2>Contact</h2>
                                <hr />
                                <div className="contact_flex">
                                    <div className="contact_addMain">
                                        <div className="contact_address">
                                            <h3><Icon name="address card" color="blue" size="large" /> Address</h3>
                                            <div className="contact_para">
                                                <p>63, karruppana Gounder layout,<br />Peelamedu,<br /> Coimbatore-641004.</p>
                                            </div>
                                        </div>
                                        <div className="contact_address">
                                            <h3><Icon name="mobile alternate" color="blue" size="large" />Mobile Number</h3>
                                            <div className="contact_para">
                                                <p>+91 9047609410</p>
                                                <p>+91 7904021944</p>
                                            </div>
                                        </div>
                                        <div className="contact_address">
                                            <h3><Icon name="mail" color="blue" size="large" />Email Address</h3>
                                            <div className="contact_para">
                                                <p>sakthi4645@gmail.com</p>
                                                <p>Webshine2020@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="contact_address">
                                            <h3><Icon name="linkify" color="blue" size="large" />Social Media</h3>
                                            <div className="contact_para">
                                                <Link to={{ pathname: "https://github.com/vaishnavan" }} target="_blank"><Icon name="github" size="large" /></Link>
                                                <Link to={{ pathname: "https://www.instagram.com/sakthi_ns_pulsar_5/" }} target="_blank"><Icon name="instagram" size="large" /></Link>
                                                <Link to={{ pathname: "https://www.linkedin.com/in/sakthi-born-to-win-b13956178/" }} target="_blank"><Icon name="linkedin" size="large" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact_map">
                                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.1294749154417!2d77.0026838639532!3d11.033670757411832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582160eed3b7%3A0x17b2a4558fdbab8!2sKarrupana%20Layout%2C%20Peelamedu%2C%20Tamil%20Nadu%20641004!5e1!3m2!1sen!2sin!4v1610429588029!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                }
            </>
        );
    }
}

export default Contact;
