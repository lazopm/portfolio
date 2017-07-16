import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import ss from './styles';

const Links = ({ cursor, text, number }) =>
    <div className={css(ss.LineContainer)}>
        Links
    </div>;

Links.defaultProps = {
    cursor: false,
};

Links.propTypes = {
    cursor: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
};

export default Links;
