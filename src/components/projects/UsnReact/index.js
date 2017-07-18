import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 

const UsnReact = () =>
    <div className={css(ss.Container)}>
        <h1>USN React Presentation</h1>
        <p>A little React word game app I coded for a live demo at work.</p>
    </div>;

export default UsnReact;
