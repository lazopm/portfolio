import React from 'react';
import theme from 'constants/termTheme';
import Line from '../Line';

const Skills = () => (
    <React.Fragment>
        <a name="skills"/>
        <Line prefix>cat ./skills/LANGUAGES.md</Line>
        <Line>javascript</Line>
        <Line>python</Line>
        <br/>
        <Line prefix>cat ./skills/FRONT_END.md</Line>
        <Line>frameworks</Line>
        <Line>react, vue, backbone</Line>
        <br/>
        <Line>tools</Line>
        <Line>webpack, jest, git</Line>
        <br/>
        <Line prefix>cat ./skills/BACK_END.md</Line>
        <Line>node.js</Line>
        <Line>express</Line>
        <Line>mongodb</Line>
        <Line>graphql</Line>
        <br/>
    </React.Fragment>
);

export default Skills;
