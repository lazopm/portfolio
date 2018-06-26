import React from 'react';
import theme from 'constants/termTheme';
import Line from '../Line';

const Skills = () => (
    <React.Fragment>
        <a name="skills"/>
        <Line prefix>cat ./skills/languages.txt</Line>
        <Line>javascript, python</Line>
        <br/>
        <Line prefix>cat ./skills/frontend.txt</Line>
        <Line>react, vue, backbone</Line>
        <Line>git, webpack, jest</Line>
        <br/>
        <Line prefix>cat ./skills/backend.txt</Line>
        <Line>node.js, express, graphql, mongodb, flask</Line>
        <br/>
    </React.Fragment>
);

export default Skills;
