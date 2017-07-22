import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import projectSS from '../styles';

const GardenApi = ({
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
        <h2>Garden API</h2>
        <p>A Serverless AWS Lambda service to manage an automated garden.</p>
    </div>;

export default GardenApi;
