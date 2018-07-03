import React from 'react';
import styled from 'styled-components';
import media from 'style/media';
import { theme } from 'constants/colors';
import ascii from './ascii';

const Ascii = styled.pre`
    background: #64727d;
    color: black;
    margin: 0;
    font-family: monospace;
    font-size: 4px;
    line-height: 2px;
    ${media.medium} {
        font-size: 4px;
        line-height: 2px;
    }
    ${media.large} {
        font-size: 6px;
        line-height: 3px;
    }
`;

const Face = () => <Ascii>{ascii}</Ascii>;

export default Face;
