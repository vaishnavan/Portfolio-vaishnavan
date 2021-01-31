import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {

  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <Icon name="cancel" size="large" className="side_navCancel" onClick={props.click} />
      <ul className="side_navItem">
        <h3>Vaishnavan M (Love to code my Life)</h3>
        <li className="side_navList"><Icon name="home" /><Link to="/">Home</Link></li>
        <li className="side_navList"><Icon name="audio description" /><Link to="/about">About</Link></li>
        <li className="side_navList"><Icon name="graduation cap" /><Link to="/qualification">Qualification</Link></li>
        <li className="side_navList"><Icon name="question circle" /><Link to="/skill">Skills</Link></li>
        <li className="side_navList"><Icon name="pin" /><Link to="/project">Projects</Link></li>
        <li className="side_navList"><Icon name="address book" /><Link to="/contact">Contact</Link></li>
        <button onClick={props.sideToggle}>{props.modeChangeReverse}</button>
      </ul>
    </nav>
  );
};

export default sideDrawer;
