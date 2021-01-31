import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer_main">
                    <div className="footer_head">
                        <h2>Web Developer</h2>
                        <p>A computer science majored individual with practical hands-on-approach in Java, Python and SQL.Self taught in Web Develoment technologies. A dedicated, organized person and also an excellent team worker. 
                            Keen and very willing to learn and develop new skills. My passion is all about creating real elegant looking websites.</p>
                    </div>
                    <div className="footer_links">
                        <Link to={{pathname:"https://github.com/vaishnavan"}} target="_blank"><Icon name="github" size="large" /></Link>
                        <Link to={{pathname:"https://www.instagram.com/sakthi_ns_pulsar_5/"}} target="_blank"><Icon name="instagram" size="large" /></Link>
                        <Link to={{pathname:"https://www.linkedin.com/in/sakthi-born-to-win-b13956178/"}} target="_blank"><Icon name="linkedin" size="large" /></Link>
                    </div>
                    <div className="footer-contact">
                        <p>Contact: +91 9047609410</p>
                        <p>Email: webshine2020@gmail.com</p>
                    </div>
                    <div className="footer-copyrights">
                        <p>Copyright@2021 my site<br/>
                        Designed by Vaishnavan M</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Footer;
