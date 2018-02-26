import React from 'react'; 
import styled from 'styled-components';
import media from 'style/media';
import theme from 'constants/termTheme';
import ascii from './ascii';

const Ascii = styled.pre`
    background: white;
    color: ${theme[13]};
    margin: 0;
    font-family: monospace;
    font-size: 4px;
    line-height: 2px;
    ${media.medium`
        font-size: 4px;
        line-height: 2px;
    `}
    ${media.large`
        order: 1;
        font-size: 8px;
        line-height: 4px;
    `}
`;

const Face = () =>
    <Ascii>
        {ascii}
    </Ascii>

export default Face;
