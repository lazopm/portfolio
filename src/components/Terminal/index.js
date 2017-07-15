import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import styles from './styles';
import Line from './Line';

class Terminal extends Component { 
    render() {
        const { lines } = this.props;
        return (
            <div className={css(styles.Container)}>
                {lines.map((line, i) => (
                    <Line 
                        text={line}
                        cursor={lines.length - i === 1} 
                    />
                ))}
            </div>
        );
    }
}

Terminal.defaultProps = {
    lines: [
        'hello',
        'world',
    ]
};
Terminal.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Terminal;
