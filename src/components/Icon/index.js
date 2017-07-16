import React from 'react';
import PropTypes from 'prop-types';
import { textDark } from 'constants/colors';

const Icon = ({ name, color, sprite }) =>
    <svg style={{
        width: '48px',
        height: '48px',
    }}>
        <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref={`/icons/${sprite}.svg#${name}`}
        />
    </svg>;

Icon.defaultProps = {
    color: textDark,
    sprite: 'regular',
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
};

export default Icon;
