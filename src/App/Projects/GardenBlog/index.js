import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
import ProjectLinks from 'components/ProjectLinks';
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
            projectSS.Container,
            active ? projectSS.Active : projectSS.Inactive
        )}
    >
        <h2 className={css(
            projectSS.Heading,
        )}>
            Garden Blog
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
                A blog for the U.S. Tech Blog that explains my experience designing and developing a Serverless service to manage an automated garden.
            </p>
        </div>
        <ProjectLinks 
            repository="hi"
            demo="hi"
            stack={['react']}
        />
    </div>;

export default GardenBlog;
