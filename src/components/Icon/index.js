import React from 'react';
import PropTypes from 'prop-types';
import { textDark } from 'constants/colors';

const Icon = ({ name, color, sprite, ...restProps }) =>
    <svg 
        style={{
            fill: color,
        }}
        {...restProps}
    >
        <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref={`/icons/sprites.svg#${name}`}
        />
    </svg>;

Icon.defaultProps = {
    color: textDark,
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Icon;
