import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import Project from 'components/Project';

const GardenBlog = () =>
    <Project
        className={css(ss.Container)}
        title="Garden Blog"
        description="A blog for the U.S. Tech Blog that explains my experience designing and developing a Serverless service to manage an automated garden."
    >
    </Project>;

export default GardenBlog;
