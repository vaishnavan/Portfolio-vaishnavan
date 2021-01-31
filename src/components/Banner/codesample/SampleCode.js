import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './samplecode.css';

class SampleCode extends Component {
    render() {
        return (
            <div className="code_main">
                <div className="code_content">
                    <h2>What is JSX?</h2>
                    <hr />
                    <p>JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.</p>
                    <SyntaxHighlighter className="code_sampleShow" language="react" style={tomorrowNight}>
                        {
                        `  import React from 'react';

  class App extends React.Component {
        render() {
            return(
            <div>
             <h1>{'Welcome to React world!'}</h1>
            </div>
            )
        }
    }
  export default App;`}
                    </SyntaxHighlighter>
                </div>
                <div className="code_content">
                    <h2>How Virtual DOM works?</h2>
                    <hr />
                    <ol type="i">
                        <li>Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.</li>
                        <img src="https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/vdom1.png" alt="no" />
                        <li>Then the difference between the previous DOM representation and the new one is calculated.</li>
                        <img src="https://github.com/sudheerj/reactjs-interview-questions/raw/master/images/vdom2.png" alt="no" />
                    </ol>
                </div>
            </div>
        )
    }
}

export default SampleCode
