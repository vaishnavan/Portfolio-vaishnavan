import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import Footer from '../Footer/Footer'
import Navbar from '../navbarMain/Navbar'
import { Icon } from 'semantic-ui-react'
import Typical from 'react-typical'
import Aos from 'aos'
import './about.css'
import '../../../node_modules/aos/dist/aos.css'
import Interest from './Interest/Interest'

class About extends Component {
  constructor (props) {
    super(props)

    this.state = {
      show: false,
      loading: false
    }
  }

  read = () => {
    this.setState({
      show: !this.state.show
    })
  }

  componentDidMount () {
    this.setState({
      loading: true
    })
    let timer = setTimeout(() => {
      this.setState({
        loading: false
      })
      Aos.init({
        duration: 1000,
        easing: 'ease-in-out'
      })
    }, 2000)
    return () => clearTimeout(timer)
  }

  render () {
    const { show, loading } = this.state
    return (
      <div>
        {loading && (
          <Loader
            className='loader'
            type='Grid'
            color='#002db3'
            height={50}
            width={50}
          />
        )}
        <Navbar
          toggleBar={this.props.handleClick}
          modechangeData={this.props.modeChange}
        />
        {!loading && (
          <div>
            <div className='about_container'>
              <div className='about_head'>
                <h2>About Me</h2>
                <hr />
                <h3>
                  Hi, I am
                  <Typical
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                      ' Vaishnavan M',
                      1000,
                      ' Web Designer',
                      1000,
                      ' React Developer',
                      1000,
                      ' MERN Stack Developer.',
                      1000
                    ]}
                  />
                </h3>
                <p style={{fontSize:"16px"}}>
                  A computer science majored individual with practical
                  hands-on-approach in MERN stcak. Self taught in Full Stack
                  Develoment technologies. A dedicated, organized person and
                  also an excellent team worker. Keen and very willing to learn
                  and develop new skills. My passion is all about creating real
                  elegant looking Applications.
                </p>
              </div>
              <div data-aos='zoom-out' className='about_banner'>
                <img
                  src='https://c0.wallpaperflare.com/preview/88/683/790/editor-code-headphones-programming.jpg'
                  alt='no'
                />
              </div>
              <div className='about_content'>
                <h2>MERN Stack Developer</h2>
                <hr />
                <ul type='circle'>
                  <li>
                    <Icon
                      name='arrow alternate circle right'
                      size='large'
                      color='blue'
                    />
                    <b>Name:</b> Vaishnavan M
                  </li>
                  <li>
                    <Icon
                      name='arrow alternate circle right'
                      size='large'
                      color='blue'
                    />
                    <b>Degree:</b> Bachelor of science in Information technology
                  </li>
                  <li>
                    <Icon
                      name='arrow alternate circle right'
                      size='large'
                      color='blue'
                    />
                    <b>Techology:</b> HTML5, CSS3, JavaScript, Bootstrap, java,
                    springboot, Reactjs, Nodejs, mongodb, firebase, Postman,
                    GraphQL, Apache Kafha, Sematic-UI-React.
                  </li>
                  <li>
                    <Icon
                      name='arrow alternate circle right'
                      size='large'
                      color='blue'
                    />
                    <b>Date Of Birth:</b> 05/03/1999
                  </li>
                  <li>
                    <Icon
                      name='arrow alternate circle right'
                      size='large'
                      color='blue'
                    />
                    <b>Email:</b> Sakthi4645@gmail.com
                  </li>
                  <li>
                    <Icon
                      name='arrow alternate circle right'
                      size='large'
                      color='blue'
                    />
                    <b>Phone.no:</b> +91 9047609410
                  </li>
                </ul>
                {show ? (
                  <p>
                    As a Full-stack Developer, I have lots of interest in
                    designing website in a very attractive way with animation
                    effects.I have the capability of managing work pressure. I
                    have a very good hands-on experience in both front-end and
                    Back-end development and currently I'm learning
                    GraphQL(Graph Query languange) to expand my skills in
                    API(Application programming Interface) creation.
                    <span onClick={this.read}>ReadLess</span>
                  </p>
                ) : (
                  <p>
                    As a Full-stack Developer, I have lots of interest in
                    designing website in a very attractive way with animation
                    effects.I have the capability of managing work pressure....
                    <span onClick={this.read}>ReadMore</span>
                  </p>
                )}
              </div>
            </div>
            <Interest />
            <Footer />
          </div>
        )}
      </div>
    )
  }
}

export default About
