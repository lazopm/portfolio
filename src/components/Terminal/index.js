import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import styles from './styles';

class Terminal extends Component { 
    render() {
        return (
            <div className={css(styles.Container)}>
                <span className={css(styles.Blink)}>hello world</span>
            </div>
        );
    }
}


export default Terminal;
