import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'constants/colors';
import Line from './Line';
import Status from './Status';
import schedule from './schedule';
import initialLines from './initialLines';

const Container = styled.div`
    color: ${theme[7]};
    background: #1c2125;
    font-family: 'Inconsolata', monospace;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 284px;
    cursor: ${props => (props.mode === 'INSERT' ? 'alias' : 'initial')};
`;

const Lines = styled.div`
    flex-grow: 1;
    .hide {
        display: none;
        @media (min-width: 540px) {
            display: initial;
        }
    }
`;

class Terminal extends Component {
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
        this.skipAnimation = this.skipAnimation.bind(this);
    }
    async componentDidMount() {
        this.setState({
            mode: 'INSERT',
            cursor: true,
        });
        for (let [fn, arg] of schedule) {
            if (this.state.skipped) return;
            await this[fn](arg);
        }
        this.setState(state => ({
            ...state,
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
    skipAnimation() {
        this.setState(state => ({
            ...state,
            skipped: true,
            lines: this.computeFinalLines(schedule)
            mode: 'NORMAL',
            cursor: false,
            fileType: 'text',
            fileName: '~/hi.txt',
        }));
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
            if (this.state.skipped) return;
            this.append(char);
            await this.sleep(40);
        }
    }
    render() {
        const { lines, cursor, fileName, fileType, mode } = this.state;
        return (
            <Container mode={mode} onClick={this.skipAnimation}>
                <Lines>
                    {lines.map((line, i) => (
                        <Line
                            key={`${line}${i}`}
                            text={line}
                            number={i + 1}
                            cursor={cursor && lines.length - i === 1}
                        />
                    ))}
                </Lines>
                <Status
                    line={lines.length}
                    mode={mode}
                    char={lines[lines.length - 1].length + 1}
                    fileName={fileName}
                    fileType={fileType}
                />
            </Container>
        );
    }
};

export default Terminal;
