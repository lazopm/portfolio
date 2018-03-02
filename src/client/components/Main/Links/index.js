import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';
import media from 'style/media';
import Line from '../Line';

const Link = styled.a`
    margin-right: 10px;
`;

const Sticky = styled.div`
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
    ${media.toLarge` 
        background: #0e1113;
        position: sticky;
        top: 0px;
    `}
`;

const Links = () => (
    <React.Fragment>
        <Line prefix>ls</Line>
        <Sticky>
            <Line>
                <Link href="#about">ABOUT_ME.md</Link>
                <Link href="#skills">skills</Link>
                <Link href="#projects">projects</Link>
            </Line>
        </Sticky>
    </React.Fragment>
);

export default Links;
