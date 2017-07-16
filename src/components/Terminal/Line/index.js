import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import ss from './styles';
import Cursor from './Cursor';

const Line = ({ cursor, text, number }) =>
    <div className={css(ss.LineContainer)}>
        <div className={css(ss.Gutter)}>
            <span className={css(ss.Number)}>
                {number}
            </span>
        </div>
        <div>
            {text}
            {cursor && <Cursor/>}
        </div>
    </div>;

Line.defaultProps = {
    cursor: false,
};

Line.propTypes = {
    cursor: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

export default Line;
