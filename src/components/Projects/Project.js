import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Footer from '../Footer/Footer';
import Navbar from '../navbarMain/Navbar';
import Aos from 'aos';
import './project.css';
import '../../../node_modules/aos/dist/aos.css';
import Comment from '../comments/Comment';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Project extends Component {

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            myProjects:[]
        }
    }

    componentDidMount() {
        axios.get("projectJson/project.json")
        .then((res) => {
            this.setState({
                myProjects:res.data.data
            })
        })

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
        const { loading, myProjects } = this.state;
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
                                <h2>Projects-{myProjects.length}</h2>
                                <hr />
                               {myProjects.map((data, i) => {
                                   return(
                                    <div data-aos="flip-up" key={i} className="project_details">
                                        <div className="project_image">
                                            <img src={data.imgurl} alt="no" />
                                        </div>
                                        <div className="project_content">
                                            <h2>Project Description</h2>
                                                {data.desc.map((data1,i) => {
                                                    return(
                                                        <ul key={i} type="circle">
                                                            <li>{data1}</li>
                                                        </ul>
                                                    )
                                                })}
                                        </div>
                                        <div className="live_preview">
                                            <Link target="_blank" to={{pathname:`${data.deploy}`}}>View Project</Link>
                                        </div>
                                    </div>
                                   )
                               })}
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
