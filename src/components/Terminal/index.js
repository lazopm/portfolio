import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import styles from './styles';

class Terminal extends Component { 
    render() {
        return (
            <div className={css(styles.Container)}>
                Sup wor
                <span className={css(styles.Blink)}>|</span>
            </div>
        );
    }
}


export default Terminal;
