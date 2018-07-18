import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from 'constants/colors';

const Container = styled.div`
    height: 1rem;
    overflow-y: hidden;
    margin-top: 1rem;
    display: flex;
    color: white;
    flex-wrap: wrap;
`;

const Mode = styled.div`
    background: ${theme[13]};
    padding: 0 10px;
`;

const File = styled.div`
    background: ${theme[1]};
    flex-grow: 1;
    padding: 0 10px;
`;

const Type = styled.div`
    background: ${theme[1]};
    padding: 0 10px;
`;

const OS = styled.div`
    background: ${theme[3]};
    padding: 0 10px;
`;

const Numbers = styled.div`
    background: ${theme[13]};
    padding: 0 10px;
`;

const Status = ({ mode, line, char, fileName, fileType }) => (
    <Container>
        <Mode>{mode}</Mode>
        {fileName && <File>{fileName}</File>}
        {fileType && <Type>{fileType}</Type>}
        <OS>utf-8[unix]</OS>
        <Numbers>
            {line}/{char}
        </Numbers>
    </Container>
);

Status.propTypes = {
    mode: PropTypes.string.isRequired,
    line: PropTypes.number.isRequired,
    char: PropTypes.number.isRequired,
    fileName: PropTypes.string,
    fileType: PropTypes.string,
};

export default Status;
