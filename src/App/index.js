import React, { Component } from 'react';
import { css } from 'aphrodite';
import sleep from 'util/sleep';

import ss from './styles';
import Terminal from 'components/Terminal';
import Face from 'components/Face';
import Links from 'components/Links';

const spit = async function(lines, newLines, cb) {
    let addedLines = [];
    for (let line of newLines) {
        let newLine = '';
        for (let char of line) {
            newLine += char;
            await sleep(25);
            cb([...lines, ...addedLines, newLine]);
        }
        addedLines = [...addedLines, newLine];
    }
};

class App extends Component { 
    constructor() {
        super();
        this.state = {
            lines: [
                '    ____        __    __        __',
                '   / __ \\____ _/ /_  / /___    / /   ____ _____  ____',
                '  / /_/ / __ `/ __ \\/ / __ \\  / /   / __ `/_  / / __ \\',
                ' / ____/ /_/ / /_/ / / /_/ / / /___/ /_/ / / /_/ /_/ /',
                '/_/    \\__,_/_.___/_/\\____/ /_____/\\__,_/ /___/\\____/',
                '    Front End Developer based in Washington, DC.',
                '',
            ]
        }
    }
    componentDidMount() {
        spit(this.state.lines, [
            'Hello! I\'m Pablo, I make web stuff.',
            'Thanks for visiting my portfolio!',
            'Check out some of my work below, or drop me a line at <a href="mailto:lazopm@gmail.com">lazopm@gmail.com</a>.',
            'You can check out the <a href="https://github.com/lazopm/portfolio">source code</a> for this page at my <a href="https://github.com/lazopm/portfolio">github</a>.',
            '',
            '-Pablo',
        ], lines => this.setState({lines}));
    }
    render() {
        return (
            <div className={css(ss.Wrapper)}>
                <div className={css(ss.Header)}>
                    <Face/>
                    <Terminal lines={this.state.lines}/>
                    <Links/>
                </div>
                <div className={css(ss.Main)}>
                    stuff
                </div>
            </div>
        )
    }
}

export default App;
