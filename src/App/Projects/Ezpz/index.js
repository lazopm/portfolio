import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import Project from 'components/Project';

const Ezpz = () =>
    <Project
        className={css(ss.Container)}
        title="ezpz"
        description="ezpz is an open source css in js library that makes inline styles easy to use and keeps them consistent."
    >
    </Project>;

export default Ezpz;
