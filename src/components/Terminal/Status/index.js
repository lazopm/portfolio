import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import ss from './styles';

const Status = ({
    mode, line, char,
    fileName, fileType,
}) =>
    <div className={css(ss.Container)}>
        <div className={css(ss.Mode)}>
            {mode}
        </div>
        <div className={css(ss.File)}>
            {`~/portfolio/${fileName}`}
        </div>
        <div className={css(ss.Type)}>
            {fileType}
        </div>
        <div className={css(ss.OS)}>
			utf-8[unix]
        </div>
        <div className={css(ss.Numbers)}>
            {line}/{char}
        </div>
    </div>;

Status.defaultProps = {
    mode: 'INSERT',
    fileName: 'untilted.txt',
    fileType: 'text',
};

Status.propTypes = {
    mode: PropTypes.string.isRequired,
    line: PropTypes.number.isRequired,
    char: PropTypes.number.isRequired,
    fileName: PropTypes.string.isRequired,
    fileType: PropTypes.string.isRequired,
};

export default Status;
