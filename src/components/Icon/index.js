import React from 'react';
import PropTypes from 'prop-types';
import { textDark } from 'constants/colors';

const Icon = ({ name, color }) =>
    <svg style={{
        width: '48px',
        height: '48px',
    }}>
        <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref={`/icons/regular.svg#${ name }`}
        />
    </svg>;

Icon.defaultProps = {
    color: textDark,
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default Icon;
