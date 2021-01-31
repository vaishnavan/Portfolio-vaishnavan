import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <>
                <header className="toolbar_headerMain">
                    <nav className="toolbar_headerNav">
                        <div className="toolbar__toggle-button">
                            <Icon name="bars" size="large" onClick={this.props.drawerClickHandler} />
                        </div>
                        <div className="toolbar_navLogo">
                            <h3><Link to="/"><Icon name="magento" />Vaishnavan M</Link></h3>
                        </div>
                        <div className="toolbar_split" />
                        <div className="toolbar_navItems">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/qualification">Qualification</Link></li>
                                <li><Link to="/skill">Skills</Link></li>
                                <li><Link to="/project">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Toolbar;
