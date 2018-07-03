import React from 'react';
import styled from 'styled-components';
import theme from 'constants/termTheme';

const Light = styled.span`
    color: ${theme[3]};
`;

const Line = ({ prefix, children }) => (
    <React.Fragment>
        {prefix ? <Light>$ {children}</Light> : children}
        <br />
    </React.Fragment>
);

export default Line;
