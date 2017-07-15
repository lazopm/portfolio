import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import styles from './styles';
import Cursor from './Cursor';

class Terminal extends Component { 
    render() {
        return (
            <div className={css(styles.Container)}>
                Sup wor
                <Cursor/>
            </div>
        );
    }
}


export default Terminal;
