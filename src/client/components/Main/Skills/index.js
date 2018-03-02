import React from 'react';
import theme from 'constants/termTheme';
import Line from '../Line';

const Skills = () => (
    <React.Fragment>
        <Line prefix/>
        <Line prefix/>
        <Line prefix/>
        <Line prefix>cat ./skills/LANGUAGES.md</Line>
        <Line>javascript</Line>
        <Line>python</Line>
        <br/>
        <Line prefix>cat ./skills/FRONT_END.md</Line>
        <Line>frameworks</Line>
        <Line>- react</Line>
        <Line>- backbone</Line>
        <br/>
        <Line>libraries</Line>
        <Line>- redux</Line>
        <Line>- d3.js</Line>
        <Line>- leaflet</Line>
        <Line>- jest</Line>
        <Line>- apollo</Line>
        <br/>
        <Line>tools</Line>
        <Line>- webpack</Line>
        <Line>- jest</Line>
        <Line>- enzyme</Line>
        <br/>
        <Line prefix>cat ./skills/BACK_END.md</Line>
        <Line>node.js</Line>
        <Line>express</Line>
        <Line>mongodb</Line>
        <Line>graphql</Line>
        <Line>serverless</Line>
        <Line>pyramid</Line>
        <br/>
    </React.Fragment>
);

export default Skills;
