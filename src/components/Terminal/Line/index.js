import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import ss from './styles';

const Line = ({ cursor, text, number }) =>
    <div className={css(ss.LineContainer)}>
        <div className={css(ss.Gutter)}>
            <span className={css(ss.Number)}>
                {number}
            </span>
        </div>
        <div className={css(
            ss.Text,
            cursor && ss.Cursor)
        }>
            {text}
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
