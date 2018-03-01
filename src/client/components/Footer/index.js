import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';

const Container = styled.div`
    background: ${theme[1]};
    color: white;
    height: 60px;
    display: flex;
    align-items: center;
    grid-area: footer;
`;

const Text = styled.div`
    flex-grow: 1;
    text-align: center;
`;

const Footer = () => (
    <Container>
        <Text>built with ☕by Pablo Lazo</Text>
    </Container>
);

export default Footer;
