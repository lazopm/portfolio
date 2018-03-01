import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'constants/termTheme';
import Line from './Line';
import Status from './Status';

const Container = styled.div`
	color: ${theme[7]};
	background: ${theme[0]};
	font-family: 'Inconsolata', monospace;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`;
const Lines = styled.div`
	flex-grow: 1;
`;
const Terminal = ({
    lines,
    mode,
    cursor,
    fileName,
    fileType,
}) =>
    <Container>
        <Lines>
            {lines.map((line, i) => (
                <Line
                    key={`${line}${i}`}
                    text={line}
                    number={i + 1}
                    cursor={cursor && lines.length - i === 1}
                />
            ))}
        </Lines>
        <Status
            line={lines.length}
            mode={mode}
            char={lines[lines.length - 1].length + 1}
            fileName={fileName}
            fileType={fileType}
        />
    </Container>;

Terminal.defaultProps = {
    lines: [''],
    mode: 'NORMAL',
    cursor: true,
};
Terminal.propTypes = {
    fileName: PropTypes.string,
    fileType: PropTypes.string,
    cursor: PropTypes.bool.isRequired,
    mode: PropTypes.string.isRequired,
    lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Terminal;
