import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import Project from 'components/Project';

const UsnReact = () =>
    <Project
        className={css(ss.Container)}
        title="USN React Presentation"
        description="A little React word game app I coded for a live demo at work."
    >
    </Project>;

export default UsnReact;
