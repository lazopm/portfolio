import React from 'react';
import styled from 'styled-components';
import { theme } from 'constants/colors';

const Container = styled.div`
    font-family: 'Inconsolata', monospace;
    color: ${theme[3]};
    display: flex;
    justify-content: center;
    margin-right: 5px;
`;

const Footer = () => (
    <Container>
        <span>
            built with &#9749; by <strong>Pablo Lazo</strong>
        </span>
    </Container>
);

export default Footer;
