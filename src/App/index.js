import React, { Component } from 'react';
import { css } from 'aphrodite';
import sleep from 'util/sleep';

import ss from './styles';
import Terminal from 'components/Terminal';
import Face from 'components/Face';
import Links from 'components/Links';

class App extends Component { 
    constructor() { super();
        this.state = {
            mode: 'NORMAL',
            cursor: false,
            fileName: '[No Name]',
            fileType: null,
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
    async componentDidMount() {
        await sleep(1000)
        this.setState({
            mode: 'INSERT',
            cursor: true,
        });
        this.newLine();
        await this.typeOut('Hello! I\'m Pablo, I make web stuff.');

        this.newLine();
        await sleep(500);
        await this.typeOut('Thanks for visiting my portfolio!');

        this.newLine();
        await sleep(500);
        await this.typeOut('Check out some of my work below, or drop me a line at ');
        this.appendToLastLine('<a href="mailto:lazopm@gmail.com">');
        await this.typeOut('lazopm@gmail.com');
        this.appendToLastLine('</a>');
        await this.typeOut('.');

        this.newLine();
        await sleep(500);
        await this.typeOut('You can check out the ');
        this.appendToLastLine('<a href="https://github.com/lazopm/portfolio">');
        await this.typeOut('source code');
        this.appendToLastLine('</a>');
        await this.typeOut(' for this page at my ')
        this.appendToLastLine('<a href="https://github.com/lazopm">');
        await this.typeOut('github');
        this.appendToLastLine('</a>');
        await this.typeOut('.');

        this.newLine();
        this.newLine();
        await sleep(500)
        await this.typeOut('-Pablo');

        await sleep(3000)
        this.setState({
            mode: 'NORMAL',
            cursor: false,
            fileType: 'text',
            fileName: '~/portfolio/welcome.txt',
        });
    }
    newLine(line = '') {
        this.setState({lines: [...this.state.lines, line]})
    }
    appendToLastLine(str) {
        this.setState({lines: [
            ...this.state.lines.slice(0, -1),
            this.state.lines.slice(-1) + str, 
        ]});
    }
    async typeOut(str) {
        for (let char of str) {
            this.appendToLastLine(char);
            await sleep(50);
        }
    }
    render() {
        return (
            <div className={css(ss.Wrapper)}>
                <div className={css(ss.Header)}>
                    <Face/>
                    <Terminal
                        mode={this.state.mode}
                        lines={this.state.lines}
                        cursor={this.state.cursor}
                        fileName={this.state.fileName}
                        fileType={this.state.fileType}
                    />
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
