import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
import ProjectLinks from 'components/ProjectLinks';
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
            projectSS.Container,
            active ? projectSS.Active : projectSS.Inactive
        )}
    >
        <h2 className={css(
            projectSS.Heading,
        )}>
            Garden API
            {active &&
                <Icon
                    name="times-square"
                    className={css(projectSS.CloseIcon)}
                    onClick={deactivate}
                />
            }
        </h2>
        <div className={css(projectSS.Content)}>
            <p className={css(projectSS.Description)}>
                A Serverless AWS Lambda service to manage an automated garden.
            </p>
        </div>
        <ProjectLinks 
            repository="hi"
            stack={['react']}
        />
    </div>;

export default GardenApi;
