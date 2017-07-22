import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import Project from 'components/Project';

const GardenApi = () =>
    <Project
        className={css(ss.Container)}
        title="Garden API"
        description="A Serverless AWS Lambda service to manage an automated garden."
    >
    </Project>;

export default GardenApi;
