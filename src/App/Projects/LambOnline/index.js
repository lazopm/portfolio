import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import Project from 'components/Project';

const LambOnline = () =>
    <Project
        className={css(ss.Container)}
        title="Lamb Online"
        description="Data entry web application for a bilingual school in Washington, DC. Both the UI and generated reports are displayed in English or Spanish depending on the teacher or parent's primary language."
    >
    </Project>;

export default LambOnline;
