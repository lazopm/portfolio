import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import projectSS from '../styles';

const LambOnline = ({
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
        <h2>Lamb Online</h2>
        <p>Data entry web application for a bilingual school in Washington, DC. Both the UI and generated reports are displayed in English or Spanish depending on the teacher or parent's primary language.</p>
    </div>;

export default LambOnline;
