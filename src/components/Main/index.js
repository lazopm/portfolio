import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';

const Container = styled.div`
	flex-grow: 1;
	background: #0e1113;
    display: flex;
    justify-content: center;
`;

const Inner = styled.div`
    flex-basis: 1200px;
    flex-grow: 0;
`;

const About = styled.div`
    font-family: Inconsolata;
	color: ${theme[7]};
    padding: 10px;
    font-size: 1rem;
    p {
        margin-top: 0;
        line-height: 1.25;
    }
    a {
        margin-right: 10px;
    }
`;

const Light = styled.span`
	color: ${theme[3]};
`;
const prefix = 'portfolio:~ lazopm$';

const Main = () => (
    <Container>
        <Inner>
            <About>
                <p>
                    <Light>{prefix} ls</Light><br/>
                    <br/>
                    <a href="#about">ABOUT.md</a>
                    <a href="#skills">SKILLS.md</a>
                    <a href="#projects">projects</a><br/>
                    <br/>
                    <Light>{prefix} cat ./ABOUT_ME.md</Light><br/>
                    <br/>
                    I am a passionate developer that enjoys learning and new challenges.<br/>
                    Currently I am based in Washington, DC working at U.S. News & World Report.
                </p>
                <p>
                    <Light>{prefix}</Light><br/>
                    <Light>{prefix}</Light><br/>
                    <Light>{prefix}</Light><br/>
                    <Light>{prefix} cat ./SKILLS.md</Light><br/><br/>
                    ## LANGUAGES<br/>
                    Javascript(latest ECMAScript), Python<br/><br/>
                    ## FRONT END<br/>
                    React, redux, webpack, d3.js, leaflet, jest, Backbone<br/><br/>
                    ## BACK END<br/>
                    Node.js, Express, GraphQL, Serverless, Pyramid<br/><br/>
                </p>
            </About>
        </Inner>
    </Container>
);

export default Main;
