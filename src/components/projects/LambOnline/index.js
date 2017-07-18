import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import projectSS from '../styles';

const LambOnline = () =>
    <div className={css(
        ss.Container,
        projectSS.Project,
    )}>
        <h1 className={css(projectSS.Heading)}>
            Lamb Online
        </h1>
        <p>Data entry web application for a bilingual school in Washington, DC. Both the UI and generated reports are displayed in English or Spanish depending on the teacher or parent's primary language.</p>
    </div>;

export default LambOnline;
