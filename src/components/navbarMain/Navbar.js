import React, { Component } from 'react';
import Toolbar from '../Navbar/Toolbar/Toolbar';
import SideDrawer from '../Navbar/Sidebar/SideDrawer';
import BackDrop from '../Navbar/backDrop/BackDrop';

class Navbar extends Component {
    state = {
        sideDrawerOpen: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <BackDrop click={this.backdropClickHandler} />
        }
        return (
            <>
                <div style={{height: '100%'}}>
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    <SideDrawer 
                    show={this.state.sideDrawerOpen} 
                    click={this.backdropClickHandler} 
                    sideToggle={this.props.toggleBar} 
                    modeChangeReverse={this.props.modechangeData}
                    />
                    {backdrop}
                </div>
            </>
        );
    }
}

export default Navbar;
