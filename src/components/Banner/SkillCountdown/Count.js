import React, { Component } from "react";
import Clock from "./Clock";
import './count.css';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "may, 31, 2023" };
  }
  render() {
    return (
      <div className="count">
        {/* <div className="count-title">Countdown Timer</div>
        <div className="count-date">{this.state.deadline}</div> */}
        <Clock deadline={this.state.deadline} />
        <h3>Self Learning <span style={{fontSize:"20px",color:"rgb(88, 127, 255)"}}>100</span> days of Design language system(DLS)</h3>
      </div>
    );
  }
}
export default Count;
