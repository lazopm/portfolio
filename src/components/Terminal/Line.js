import React from 'react';
import PropTypes from 'prop-types';

import Cursor from './Cursor';

const Line = ({ cursor, text, number }) =>
    <div>
        <span>{number}</span>
        <span>
            {text}
            {cursor && <Cursor/>}
        </span>
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
