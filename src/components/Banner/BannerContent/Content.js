import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Count from '../SkillCountdown/Count';
import './content.css';

class Content extends Component {

    render() {
        const codeString = `
    import React from 'react';
    
    class App extends React.Component {
            render(){
            return(
                <h1>hello world</h1>
            )
        }
    }
    export default App;
    `;
        return (
            <>
                <div className="content_update">
                    <h2>Current Feature Update</h2>
                </div>
                <div className="content_bannerScroll">
                    <marquee>In React 16.9, It contains several new features, bugfixes, and new deprecation warnings to help prepare for a future major release.</marquee>
                </div>
                <Count />
                <div className="content_aboutReact" >
                    <h2>What is react?</h2>
                    <hr />
                    <p>React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
                    <SyntaxHighlighter className="code_display" language="react" style={tomorrowNight}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
                <div className="content_aboutReact" >
                    <h2>Advantages of ReactJs?</h2>
                    <hr />
                    <ul>
                        <li>Easy to Learn, Easy to Use. Being able to do awesome things is great, but only if you don't have to spend the rest of your life becoming proficient in a new technology.</li>
                        <li>Reusable Components.</li>
                        <li>The Virtual DOM</li>
                        <li>Great Developer Tools</li>
                        <li>It's Easier to Write with JSX</li>
                    </ul>
                </div>
                <div className="content_aboutReact" >
                    <h2>What are the major features of React?</h2>
                    <hr />
                    <h4>The major features of React are:</h4>
                    <ul>
                        <li>It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.</li>
                        <li>Supports server-side rendering.</li>
                        <li>Follows Unidirectional data flow or data binding.</li>
                        <li>Uses reusable/composable UI components to develop the view.</li>
                    </ul>
                </div>
            </>
        );
    }
}

export default Content;
