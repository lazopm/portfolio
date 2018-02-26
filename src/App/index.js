import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'style/media';
import sleep from 'util/sleep';
import runSchedule from './schedule';
import lines from './lines';

import Header from 'components/Header';
import Footer from 'components/Footer';

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

const Main = styled.div`
	flex-grow: 1;
	background: #111a1f;
`;

class App extends Component { 
    constructor() { super();
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
    activateProject(i) {
        this.setState(prevState => ({
            ...prevState,
            activeProject: i,
        }));
    }
    deactivateProject(e) {
        e.stopPropagation();
        this.setState(prevState => ({
            ...prevState,
            activeProject: null,
        }));
    }
    async typeOut(str) {
        for (let char of str) {
            this.appendToLastLine(char);
            await this.sleep(50);
        }
    }
    render() {
        return (
            <Container>
                <Header
                    onClick={() => this.setState({skipped: true})}
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
