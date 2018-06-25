import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'style/media';
import runSchedule from './schedule';
import lines from './lines';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Main from 'components/Main';
import { injectGlobal } from 'styled-components';

//eslint-disable-next-line
injectGlobal`
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
		background: #0e1113;
	}
	a {
		color: #6699CC;
        text-decoration: none;
	}
	p {
		line-height: 150%;
	}
`;


const Container = styled.div`
    display: flex;
    min-height:  100vh;
    flex-direction: column;
    .hide {
		display: none;
        ${media.medium`
            display: initial;
        `}
	}
`;

class App extends Component { 
    constructor() {
        super();
        this.state = {
            activeProject: null,
            mode: 'NORMAL',
            cursor: false,
            fileName: '[No Name]',
            fileType: null,
            skipped: false,
            lines,
        };
    }
    async componentDidMount() {
        this.setState({
            mode: 'INSERT',
            cursor: true,
        });
        await runSchedule.bind(this)();
        this.setState({
            mode: 'NORMAL',
            cursor: false,
            fileType: 'text',
            fileName: '~/hi.txt',
        });
    }
    skipAnimation(e) {
        this.setState(state => ({ ...state, skipped: true }));
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
        return this.state.skipped
            ? Promise.resolve
            : new Promise(resolve => {
                setTimeout(resolve, delay);
            });
    }
    async typeOut(str) {
        for (let char of str) {
            this.appendToLastLine(char);
            await this.sleep(30);
        }
    }
    render() {
        return (
            <Container>
                <Header
                    onClick={this.state.skipped ? null : this.skipAnimation.bind(this)}
                    terminalProps={{
                        mode: this.state.mode,
                        lines: this.state.lines,
                        cursor: this.state.cursor,
                        fileName: this.state.fileName,
                        fileType: this.state.fileType,
                    }}
                />
                <Main/>
                <Footer/>
            </Container>
        )
    }
}

export default App;
