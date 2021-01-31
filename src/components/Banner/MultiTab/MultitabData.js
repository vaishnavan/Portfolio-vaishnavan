import React, { Component } from 'react';
import CSS from './programs/CSS';
import HTML from './programs/HTML';
import Javascript from './programs/Javascript';
import ReactData from './programs/ReactData';
import './multitab.css';

class MultitabData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isHtml: true,
            isCss: false,
            isJavascript: false,
            isReact: false,
        };
    }

    html = () => {
        this.setState({
            isHtml: true,
            isCss: false,
            isJavascript: false,
            isReact: false,
        })
    }

    css = () => {
        this.setState({
            isHtml: false,
            isCss: true,
            isJavascript: false,
            isReact: false,
        })
    }

    javascript = () => {
        this.setState({
            isHtml: false,
            isCss: false,
            isJavascript: true,
            isReact: false,
        })
    }

    react = () => {
        this.setState({
            isHtml: false,
            isCss: false,
            isJavascript: false,
            isReact: true,
        })
    }


    render() {
        const { isHtml, isCss, isJavascript, isReact } = this.state;
        return (
            <>
                <div className="multitab_skill">
                    <div className={isHtml ? 'active' : ''}>
                        <button onClick={this.html}>HTML</button>
                    </div>
                    <div className={isCss ? 'active' : ''}>
                        <button onClick={this.css}>CSS</button>
                    </div>
                    <div className={isJavascript ? 'active' : ''}>
                        <button onClick={this.javascript}>JavaScript</button>
                    </div>
                    <div className={isReact ? 'active' : ''}>
                        <button onClick={this.react}>React</button>
                    </div>
                </div>
                <div className="multitab_content">
                    {isHtml ? <HTML /> : ''}
                    {isCss ? <CSS /> : ''}
                    {isJavascript ? <Javascript /> : ''}
                    {isReact ? <ReactData /> : ''}
                </div>

            </>
        );
    }
}

export default MultitabData;
