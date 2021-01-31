import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import Content from '../Banner/BannerContent/Content';
import SampleCode from '../Banner/codesample/SampleCode';
import MultitabData from '../Banner/MultiTab/MultitabData';
import Pagination from '../Banner/Pagination';
import Footer from '../Footer/Footer';
import Navbar from '../navbarMain/Navbar';

class Home extends Component {

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
            <div>
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
                        <Pagination />
                        <Content />
                        <MultitabData />
                        <SampleCode />
                        <Footer />
                    </div>
                }
            </div>
        );
    }
}

export default Home;
