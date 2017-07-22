import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import projectSS from 'components/Project/styles'; 
import Project from 'components/Project';

const Ezpz = ({
    active,
    activate,
    deactivate,
}) =>
    <Project className={css(
        ss.Container,
        active && projectSS.Active,
    )}>
        <h3 onClick={activate}>ezpz</h3>
        <p onClick={deactivate}>ezpz is an open source css in js library that makes inline styles easy to use and keeps them consistent.</p>
    </Project>;

export default Ezpz;
