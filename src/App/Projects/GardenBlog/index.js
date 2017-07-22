import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import projectSS from '../styles';

const GardenBlog = ({
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
        <h3>Garden Blog</h3>
        <p>A blog for the U.S. Tech Blog that explains my experience designing and developing a Serverless service to manage an automated garden.</p>
    </div>;

export default GardenBlog;
