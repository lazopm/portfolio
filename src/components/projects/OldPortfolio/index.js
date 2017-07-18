import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import projectSS from '../styles';

const OldPortfolio = () =>
    <div className={css(
        ss.Container,
        projectSS.Project,
    )}>
        <h1 className={css(projectSS.Heading)}>
            Old Portfolio
        </h1>
        <p>A simple portfolio to showcase my work. This was my first attempt at creating a responsive website without any css frameworks. Includes a custom control panel to manage projects.</p>
    </div>;

export default OldPortfolio;
