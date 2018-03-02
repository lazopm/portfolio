import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';
import Links from './Links';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';

const Container = styled.div`
	flex-grow: 1;
    display: flex;
    justify-content: center;
`;

const Inner = styled.div`
	font-family: 'Inconsolata', monospace;
    font-size: 1rem;
    line-height: 1.25;
    flex-basis: 1200px;
    flex-grow: 0;
    padding: 10px;
	color: ${theme[7]};
`;

const Main = () => (
    <Container>
        <Inner>
            <Links />
            <About />
            <Skills />
            <Projects />
        </Inner>
    </Container>
);

export default Main;
