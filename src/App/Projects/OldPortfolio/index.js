import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import Project from 'components/Project';

const OldPortfolio = () =>
    <Project
        className={css(ss.Container)}
        title="Old Portfolio"
        description="A simple portfolio to showcase my work. This was my first attempt at creating a responsive website without any css frameworks. Includes a custom control panel to manage projects."
    >
    </Project>;

export default OldPortfolio;
