import React, { Component } from 'react';
import { css } from 'aphrodite';
import sleep from 'util/sleep';
import runSchedule from './schedule';

import ss from './styles';
import Terminal from 'components/Terminal';
import Face from 'components/Face';
import Links from 'components/Links';
import Projects from './Projects';
import Footer from 'components/Footer';

//hides text for mobile
const hide = css(ss.Lazo);
const initialLines = [
    `    ____        __    __<span class="${hide}">        __</span>`,
    `   / __ \\____ _/ /_  / /___<span class="${hide}">    / /   ____ _____  ____</span>`,
    `  / /_/ / __ \`/ __ \\/ / __ \\<span class="${hide}">  / /   / __ \`/_  / / __ \\</span>`,
    ` / ____/ /_/ / /_/ / / /_/ /<span class="${hide}"> / /___/ /_/ / / /_/ /_/ /</span>`, `/_/    \\__,_/_.___/_/\\____/<span class="${hide}"> /_____/\\__,_/ /___/\\____/</span>`,
    `<span class="${hide}"/>    </span>Front End Developer based in Washington, DC.`,
    '',
];

class App extends Component { 
    constructor() { super();
        this.state = {
            mode: 'NORMAL',
            cursor: false,
            fileName: '[No Name]',
            fileType: null,
            skipped: false,
            lines: initialLines,
        };
    }
    componentDidMount() {
        runSchedule.bind(this)();
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
    sleep(delay) {
        return this.state.skipped ? Promise.resolve : sleep(delay);
    }
    async typeOut(str) {
        for (let char of str) {
            this.appendToLastLine(char);
            await this.sleep(50);
        }
    }
    render() {
        return (
            <div className={css(ss.Wrapper)}>
                <div onClick={() => this.setState({skipped: true})} className={css(ss.Header)}>
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
                <Projects/>
                <Footer/>
            </div>
        )
    }
}

export default App;
