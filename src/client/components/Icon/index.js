import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = styled(({ name, ...restProps }) => (
    <svg {...restProps}>
        <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref={`/assets/icons/sprites.svg#${name}`}
        />
    </svg>
))``;

Icon.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Icon;
