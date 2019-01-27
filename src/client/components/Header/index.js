import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'style/media';
import Terminal from 'components/Terminal';
import Face from './Face';
import Links from './Links';

const mediaBreak = '@media (min-width: 700px)';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    ${mediaBreak} {
        flex-direction: row;
    }
`;

const Side = styled.div`
    background: #64727d;
    display: flex;
    flex-wrap: wrap;
    ${mediaBreak} {
        order: 1;
        flex-direction: column;
    }
`;

const Header = () => (
    <Container>
        <Side>
            <Face />
            <Links />
        </Side>
        <div id="terminal">
            <Terminal />
        </div>
    </Container>
);

export default Header;
