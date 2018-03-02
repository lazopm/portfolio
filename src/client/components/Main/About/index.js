import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';
import Line from '../Line';

const Link = styled.a`
    margin-right: 10px;
`;

const About = () => (
    <React.Fragment>
        <Line prefix>ls</Line>
        <Line>
            <Link href="#about">ABOUT_ME.md</Link>
            <Link href="#skills">skills</Link>
            <Link href="#projects">projects</Link>
        </Line>
        <br/>
        <Line prefix>cat ./ABOUT_ME.md</Line>
        <Line>I am a passionate developer that enjoys learning and new challenges.</Line>
        <Line>Currently I work as a Software Developer at U.S. News & World Report in Washington, DC.</Line>
        <br/>
    </React.Fragment>
);

export default About;
