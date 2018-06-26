import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'style/media';
import schedule from './schedule';
import initialLines from './lines';

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
            lines: initialLines,
        };
    }
    async componentDidMount() {
        this.setState({
            mode: 'INSERT',
            cursor: true,
        });
        for (let [fn, arg] of schedule) {
            if (this.state.skipped) break;
            await this[fn](arg);
        }
        this.setState(state => ({
            ...state,
            lines: state.skipped ? this.computeFinalLines(schedule) : state.lines,
            mode: 'NORMAL',
            cursor: false,
            fileType: 'text',
            fileName: '~/hi.txt',
        }));
    }
    computeFinalLines(schedule) {
        const lines = [];
        for (let [fn, arg] of schedule) {
            switch(fn) {
                case('newline'):
                    lines.push('');
                    break;
                case('append'):
                case('typeout'):
                    lines.splice(-1, 1, lines[lines.length - 1] + arg);
                    break;
                default:
                    break;
            }
        }
        return [...initialLines, ...lines];
    }
    skipAnimation(e) {
        this.setState(state => ({ ...state, skipped: true }));
    }
    newline() {
        this.setState({lines: [...this.state.lines, '']})
    }
    append(str) {
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
    async typeout(str) {
        for (let char of str) {
            if (this.state.skipped) break;
            this.append(char);
            await this.sleep(30);
        }
    }
    render() {
        return (
            <Container>
                <Header
                    terminalProps={{
                        onClick: this.state.skipped ? null : this.skipAnimation.bind(this),
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
