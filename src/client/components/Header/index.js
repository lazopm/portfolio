import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'style/media';
import Terminal from 'components/Terminal';
import Face from './Face';
import Links from './Links';
import schedule from './schedule';
import initialLines from './initialLines';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    ${media.medium` 
        flex-direction: row;
    `};
`;

const Side = styled.div`
    display: flex;
    ${media.medium` 
        order: 1;
        flex-direction: column;
    `};
`;

class Header extends Component {
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
            lines: state.skipped
                ? this.computeFinalLines(schedule)
                : state.lines,
            mode: 'NORMAL',
            cursor: false,
            fileType: 'text',
            fileName: '~/hi.txt',
        }));
    }
    computeFinalLines(schedule) {
        const lines = [];
        for (let [fn, arg] of schedule) {
            switch (fn) {
                case 'newline':
                    lines.push('');
                    break;
                case 'append':
                case 'typeout':
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
        this.setState({ lines: [...this.state.lines, ''] });
    }
    append(str) {
        this.setState({
            lines: [
                ...this.state.lines.slice(0, -1),
                this.state.lines.slice(-1) + str,
            ],
        });
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
            await this.sleep(40);
        }
    }
    render() {
        return (
            <Container>
                <Side>
                    <Face />
                    <Links />
                </Side>
                <Terminal
                    onClick={
                        this.state.skipped
                            ? null
                            : this.skipAnimation.bind(this)
                    }
                    mode={this.state.mode}
                    lines={this.state.lines}
                    cursor={this.state.cursor}
                    fileName={this.state.fileName}
                    fileType={this.state.fileType}
                />
            </Container>
        );
    }
}

export default Header;
