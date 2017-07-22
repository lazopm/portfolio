import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import projectSS from 'components/Project/styles'; 
import Project from 'components/Project';

const GardenApi = ({ active }) =>
    <Project
        className={css(
            ss.Container,
            active && projectSS.Active,
        )}
    >
        <h3>Garden API</h3>
        <p>A Serverless AWS Lambda service to manage an automated garden.</p>
    </Project>;

export default GardenApi;
