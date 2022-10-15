import React, { Component } from 'react'
import Loader from 'react-loader-spinner'
import Footer from '../Footer/Footer'
import Navbar from '../navbarMain/Navbar'
import './education.css'
import Inspriation from './Inspriation/Inspriation'

class Education extends Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  componentDidMount () {
    this.setState({
      loading: true
    })
    let timer = setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 2000)
    return () => clearTimeout(timer)
  }
  render () {
    const { loading } = this.state
    return (
      <>
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
            <div className='qualification_Topnav'>
              <div style={{ padding: '10px 0' }} className='education_main'>
                <h2>Professional Experience</h2>
                <hr />

                <div style={{marginTop:"15px"}} className='education_proExpericence'>
                  {/* <h2>Professional Experience</h2>
                            <hr /> */}
                  <h3>Cybage Software</h3>
                  <label>2021 - Present</label>
                  <br />
                  <br />
                  <label>Hyderabad, Telangana</label>
                  <ul type='circle'>
                    <li>
                      Working as Software Engineer 
                    </li>
                    <li>Currently working in Xaxis UK project</li>
                  </ul>
                </div>

                <div style={{marginTop:"15px"}} className='education_proExpericence'>
                  {/* <h2>Professional Experience</h2>
                            <hr /> */}
                  <h3>INFOSYS(INFOSYS PVT LTD)</h3>
                  <label>2020-2021</label>
                  <br />
                  <br />
                  <label>Bangalore, Karnataka</label>
                  <ul type='circle'>
                    <li>
                      Worked as Operations team member in BT(British
                      Telecommunication) project for 6 months.
                    </li>
                    <li>Learnt new technologies Like Apache Kafka, Docker.</li>
                    <li>
                      Started my self-learning in ReactJs and gained knownledge
                      in UI Technologies
                    </li>
                    <li>Learnt basics about GraphQL(Graph Query languange)</li>
                  </ul>
                </div>
                <div className='education_proExpericence'>
                  <label>British Telecommunication(BT)</label>
                  <ul type='circle'>
                    <li>
                      Worked on SSP portal to track alarms and generate report
                      in UI using Angular Technology
                    </li>
                    <li>5 months delivered project using Angular</li>
                    <li>
                      Completed Front-End Development Certificate in Infosys
                    </li>
                    <li>
                      Understanding the Wirefarme and implement them into
                      interactive UI design
                    </li>
                  </ul>
                </div>
                <div className='education_proExpericence'>
                  {/* <h2>Professional Experience</h2>
                            <hr /> */}
                  <h3>INFOSYS(INFOSYS PVT LTD)</h3>
                  <label>2020-Job</label>
                  <br />
                  <br />
                  <label>Chengalpattu, Tamilnadu</label>
                  <ul type='circle'>
                    <li>Was Allocated to Chennai DC Mahendra-Worldcity </li>
                    <li>
                      I was assigned to some Accelarate Project and then, I was
                      Mapped to Bank Sector Project.
                    </li>
                    <li>Worked in a support project with Java Technology.</li>
                    <li>Desgination- Operations Exective</li>
                  </ul>
                </div>
                <div className='education_proExpericence'>
                  <h3>INFOSYS(INFOSYS PVT LTD)</h3>
                  <label>2019-Training</label>
                  <br />
                  <br />
                  <label>Mysore, Karnataka</label>
                  <ul type='circle'>
                    <li>
                      I have been trained in python and Java technologies.
                    </li>
                    <li>
                      Training was conducted in two parts Generic and Stream.
                    </li>
                    <li>In Generic ,it was about Python and RDBMS database.</li>
                    <li>
                      In Stream ,it was about core Java and Spring framework
                      with hibernate.
                    </li>
                  </ul>
                </div>
                <Inspriation />
                <div className='education_proExpericence'>
                  <h2>Education</h2>
                  <hr />
                  <h3>BACHELOR OF SCIENCE</h3>
                  <label>2016-2019</label>
                  <br />
                  <br />
                  <label>Aggregate- 72%</label>
                  <div className='education_details'>
                    <p>Dr.NGP arts and science college</p>
                    <p>Bachelor of Science in Information Technology</p>
                  </div>
                </div>
                <div className='education_proExpericence'>
                  <h3>
                    TAMILNADU HIGHER-SECONDARY EDUCATION EXAMINATION BOARD
                  </h3>
                  <label>2014-2016</label>
                  <br />
                  <br />
                  <label>Aggregate- 71%</label>
                  <div className='education_details'>
                    <p>PSG Sarvajana Higher Secondary School</p>
                    <p>Computer Science</p>
                  </div>
                </div>
                <div className='education_proExpericence'>
                  <h3>TAMILNADU SECONDARY EDUCATION EXAMINATION BOARD</h3>
                  <label>2013-2014</label>
                  <br />
                  <br />
                  <label>Aggregate- 92%</label>
                  <div className='education_details'>
                    <p>Sri Gopal Naidu Higher Secondary School</p>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Education
