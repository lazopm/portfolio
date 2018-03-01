import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';

const Container = styled.div`
    color: ${theme[3]};
    display: flex;
	justify-content: center;
`;


const Footer = () => (
    <Container>
        built with &#9749; by Pablo Lazo
    </Container>
);

export default Footer;
