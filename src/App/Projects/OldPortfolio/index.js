import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
import ProjectLinks from 'components/ProjectLinks';
import ss from './styles';
import projectSS from '../styles';

const OldPortfolio = ({
    active,
    activate,
    deactivate,
}) =>
    <div
        onClick={activate}
        className={css(
            ss.Container,
            projectSS.Container,
            active ? projectSS.Active : projectSS.Inactive,
        )}
    >
        <h2 className={css(
            projectSS.Heading,
        )}>
            Old Portfolio
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
                A simple portfolio to showcase my work. This was my first attempt at creating a responsive website without any css frameworks. Includes a custom control panel to manage projects.
            </p>
        </div>
        <ProjectLinks 
            repository="hi"
            demo="hi"
            stack={['react']}
        />
    </div>;

export default OldPortfolio;
