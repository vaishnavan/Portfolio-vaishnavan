import React, { Component } from 'react';
import Aos from 'aos';
import './pagination.css';
import '../../../node_modules/aos/dist/aos.css';
import ModalEx from '../Home/ModalEx';

class Pagination extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dev:'MERN',
             fullStack:'Full Stack Dev'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                dev:"REACT",
                fullStack:'front-End Devloper'
            })
        },5000)
        Aos.init({
            duration:1000,
            easing:'ease-in-out',
        })
    }
    
    render() {
        const { dev, fullStack } = this.state;
        return (
            <div>
                <div className="banner_main">
                    <div data-aos="fade-down" className="banner_content">
                        <h1>I'm Vaishnavan M,</h1>
                        <h3>{fullStack} = (<span>IN</span>) = <b>{dev}</b></h3>
                        {/* <Link data-aos="zoom-in" to="/skill"><button>View Skills</button></Link> */}
                        <ModalEx />
                    </div>
                    <div data-aos="fade-up" className="banner_img">
                        <img src="/images/work.png" alt="no" />
                    </div>
                </div>

            </div>
        )
    }
}

export default Pagination;
