import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import projectSS from '../styles';

const Ezpz = ({
    active,
    activate,
    deactivate,
}) =>
    <div
        onClick={activate}
        className={css(
        ss.Container,
        active && projectSS.Active,
    )}>
        <h3>ezpz</h3>
        <p>ezpz is an open source css in js library that makes inline styles easy to use and keeps them consistent.</p>
    </div>;

export default Ezpz;
