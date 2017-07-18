import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import projectSS from '../styles';

const GardenBlog = () =>
    <div className={css(
        ss.Container,
        projectSS.Project,
    )}>
        <h1 className={css(projectSS.Heading)}>
            Garden Blog
        </h1>
        <p>A blog for the U.S. Tech Blog that explains my experience designing and developing a Serverless service to manage an automated garden.</p>
    </div>;

export default GardenBlog;
