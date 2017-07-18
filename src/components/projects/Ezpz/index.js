import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 

const Ezpz = () =>
    <div className={css(ss.Container)}>
        <h2>ezpz</h2>
        <p>ezpz is an open source css in js library that makes inline styles easy to use and keeps them consistent.</p>
    </div>;

export default Ezpz;
