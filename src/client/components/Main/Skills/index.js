import React from 'react';
import theme from 'constants/termTheme';
import Line from '../Line';

const Skills = () => (
    <React.Fragment>
        <a name="skills"/>
        <Line prefix>cat ./skills/LANGUAGES.md</Line>
        <Line>javascript, python</Line>
        <br/>
        <Line prefix>cat ./skills/FRONT_END.md</Line>
        <Line>react, vue, backbone</Line>
        <br/>
        <Line>git, webpack, jest</Line>
        <br/>
        <Line prefix>cat ./skills/BACK_END.md</Line>
        <Line>node.js, express, mongodb, graphql</Line>
        <br/>
    </React.Fragment>
);

export default Skills;
