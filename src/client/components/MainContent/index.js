import React from 'react';
import styled from 'styled-components';
import { theme } from 'constants/colors';
import Projects from 'components/Projects';
import Line from './Line';

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    padding-top: 10px;
`;

const Inner = styled.div`
    font-family: 'Inconsolata', monospace;
    font-size: 1rem;
    line-height: 1.25;
    max-width: 100%;
    flex-basis: 1100px;
    flex-grow: 0;
    color: ${theme[7]};
`;

const MainContent = () => (
    <Container>
        <Inner>
            <Line prefix>cat ./skills/languages.txt</Line>
            <Line>javascript, python</Line>
            <br />
            <Line prefix>cat ./skills/frontend.txt</Line>
            <Line>react, vue, backbone</Line>
            <Line>webpack, jest, eslint plugins</Line>
            <br />
            <Line prefix>cat ./skills/backend.txt</Line>
            <Line>node.js, express, graphql, mongodb, flask</Line>
            <Line>docker, aws-lambda</Line>
            <br />
            <Line prefix>{'find ./projects -type f -exec open {} \\;'}</Line>
            <br />
            <Projects />
        </Inner>
    </Container>
);

export default MainContent;
