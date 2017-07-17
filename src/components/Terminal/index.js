import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import ss from './styles';
import Line from './Line';
import Status from './Status';

const Terminal = ({
    lines,
    mode,
    cursor,
    fileName,
    fileType,
}) =>
    <div className={css(ss.Container)}>
        <div className={css(ss.Lines)}>
            {lines.map((line, i) => (
                <Line
                    key={`${line}${i}`}
                    text={line}
                    number={i + 1}
                    cursor={cursor && lines.length - i === 1}
                />
            ))}
        </div>
        <Status
            line={lines.length}
            mode={mode}
            char={lines[lines.length - 1].length + 1}
            fileName={fileName}
            fileType={fileType}
        />
    </div>;

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
