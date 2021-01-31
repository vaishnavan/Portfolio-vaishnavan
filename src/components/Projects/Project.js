import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Footer from '../Footer/Footer';
import Navbar from '../navbarMain/Navbar';
import Aos from 'aos';
import './project.css';
import '../../../node_modules/aos/dist/aos.css';
import Comment from '../comments/Comment';

class Project extends Component {

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
            Aos.init({
                duration: 1000,
                easing: 'ease-in-out',
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
                        <div className="project_topNav">
                            <div style={{ padding: "10px 0" }} className="project_main">
                                <h2>Projects</h2>
                                <hr />
                                <div className="project_details">
                                    <div className="project_image">
                                        <img src="/images/indeed.png" alt="no" />
                                    </div>
                                    <div className="project_content">
                                        <h2>Project Description</h2>
                                        <ul type="circle">
                                            <li>Indeed Clone</li>
                                            <li>MERN stack</li>
                                            <li>Front-end: React</li>
                                            <li>Back-end: Node.js</li>
                                            <li>Database: MongoDB</li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-aos="flip-up" className="project_details">
                                    <div className="project_image">
                                        <img src="/images/covid.png" alt="no" />
                                    </div>
                                    <div className="project_content">
                                        <h2>Project Description</h2>
                                        <ul type="circle">
                                            <li>COVID-19 LiveTracker</li>
                                            <li>React Project</li>
                                            <li>Front-end: React</li>
                                            <li>packages: Axios, MaterialUI, graph.js ...</li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-aos="flip-up" className="project_details">
                                    <div className="project_image">
                                        <img src="/images/training.png" alt="no" />
                                    </div>
                                    <div className="project_content">
                                        <h2>Project Description</h2>
                                        <ul type="circle">
                                            <li>Training Acadamey</li>
                                            <li>React Capstone project</li>
                                            <li>Packages: Axios, graph.js, React-load-spinner, React-router-DOM etc..</li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-aos="flip-up" className="project_details">
                                    <div className="project_image">
                                        <img src="/images/instagram.png" alt="no" />
                                    </div>
                                    <div className="project_content">
                                        <h2>Project Description</h2>
                                        <ul type="circle">
                                            <li>Instagram clone</li>
                                            <li>MERN stack</li>
                                            <li>Front-end: React</li>
                                            <li>Back-end: Node.js</li>
                                            <li>Database: MongoDB</li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-aos="flip-up" className="project_details">
                                    <div className="project_image">
                                        <img src="/images/card.png" alt="no" />
                                    </div>
                                    <div className="project_content">
                                        <h2>Project Description</h2>
                                        <ul type="circle">
                                            <li>Card Designing</li>
                                            <li>React Project</li>
                                            <li>Front-end: React</li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-aos="flip-up" className="project_details">
                                    <div className="project_image">
                                        <img src="/images/cricket.png" alt="no" />
                                    </div>
                                    <div className="project_content">
                                        <h2>Project Description</h2>
                                        <ul type="circle">
                                            <li>CricketDB</li>
                                            <li>MERN Stack</li>
                                            <li>Front-end: React</li>
                                            <li>Back-end: Node.js</li>
                                            <li>Database: MongoDB</li>
                                        </ul>
                                    </div>
                                </div>
                                <div data-aos="flip-up" className="project_details">
                                    <div className="project_image">
                                        <img src="/images/moviedb.png" alt="no" />
                                    </div>
                                    <div className="project_content">
                                        <h2>Project Description</h2>
                                        <ul type="circle">
                                            <li>MovieDB</li>
                                            <li>MERN Stack</li>
                                            <li>Front-end: React</li>
                                            <li>Back-end: Node.js</li>
                                            <li>Database: MongoDB</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Comment />
                        <Footer />
                    </div>
                }
            </>
        );
    }
}

export default Project;
