import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import projectSS from '../styles';

const UsnReact = ({
    active,
    activate,
    deactivate,
}) =>
    <div
        onClick={activate}
        className={css(
            ss.Container,
            active && projectSS.Active,
        )}
    >
        <h2>USN React Presentation</h2>
        <p>A little React word game app I coded for a live demo at work.</p>
    </div>;

export default UsnReact;
