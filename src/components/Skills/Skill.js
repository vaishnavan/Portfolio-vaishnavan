import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Navbar from '../navbarMain/Navbar';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Aos from 'aos';
import './skill.css';
import '../../../node_modules/aos/dist/aos.css';
import SkillGraph from './SkillCharts/SkillGraph';

class Skill extends Component {
    constructor(props) {
        super(props)

        this.state = {
            skillData: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.setState({
            loading: true,
        })
        let timer = setTimeout(() => {
            this.setState({
                loading: false
            })
            axios.get('technologies.json')
                .then((res) => {
                    this.setState({
                        skillData: res.data,
                    });
                });
            Aos.init({
                duration: 1000,
                easing: 'ease-in-out',
            });
        }, 2000)
        return () => clearTimeout(timer);

    }

    render() {
        const { skillData, loading } = this.state;
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
                        <div style={{ marginTop: "20px" }} className="skill_container">
                            <h2>Skills</h2>
                            <hr />
                            <div data-aos="zoom-in" className="skills_head">
                                <h1>Languages</h1>
                                {skillData.map((skills, i) => {
                                    return (
                                        <div data-aos="zoom-in" key={i} className="skillsMain">
                                            {skills.languages.map((data, i) => {
                                                return (
                                                    <div key={i} className="skills_images">
                                                        <img src={data.imageURL} alt="no" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                            <div data-aos="zoom-in" className="skills_head">
                                <h1>Web Technologies</h1>
                                {skillData.map((skills, i) => {
                                    return (
                                        <div key={i}  className="skillsMain">
                                            {skills.WebTechnologies.map((data, i) => {
                                                return (
                                                    <div key={i} className="skills_images">
                                                        <img src={data.imageURL} alt="no" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                            <div data-aos="zoom-in" className="skills_head">
                                <h1>Tools</h1>
                                {skillData.map((skills, i) => {
                                    return (
                                        <div key={i}  className="skillsMain">
                                            {skills.tools.map((data, i) => {
                                                return (
                                                    <div key={i} className="skills_images">
                                                        <img src={data.imageURL} alt="no" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                            <div data-aos="zoom-in" className="skills_head">
                                <h1>Database</h1>
                                {skillData.map((skills, i) => {
                                    return (
                                        <div key={i} className="skillsMain">
                                            {skills.database.map((data, i) => {
                                                return (
                                                    <div key={i} className="skills_images">
                                                        <img src={data.imageURL} alt="no" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                            <div data-aos="zoom-in" className="skills_head">
                                <h1>FrameWorks</h1>
                                {skillData.map((skills, i) => {
                                    return (
                                        <div key={i} className="skillsMain">
                                            {skills.Framework.map((data, i) => {
                                                return (
                                                    <div key={i} className="skills_images">
                                                        <img src={data.imageURL} alt="no" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                            <div data-aos="zoom-in" className="skills_head">
                                <h1>Application Programming Interface</h1>
                                {skillData.map((skills, i) => {
                                    return (
                                        <div key={i} className="skillsMain">
                                            {skills.api.map((data, i) => {
                                                return (
                                                    <div key={i} className="skills_images">
                                                        <img src={data.imageURL} alt="no" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <SkillGraph />
                        <Footer />
                    </div>
                }

            </>
        );
    }
}

export default Skill;
