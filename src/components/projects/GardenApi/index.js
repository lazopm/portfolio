import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 

const GardenApi = () =>
    <div className={css(ss.Container)}>
        <h1>Garden API</h1>
        <p>A Serverless AWS Lambda service to manage an automated garden.</p>
    </div>;

export default GardenApi;
