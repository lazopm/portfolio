import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';

const Container = styled.div`
    color: ${theme[3]};
    display: flex;
	justify-content: flex-end;
    margin-right: 5px;
    opacity: 0.75;
`;


const Footer = () => (
    <Container>
        <span>
            built with &#9749; by <strong>Pablo Lazo</strong>
        </span>
    </Container>
);

export default Footer;
