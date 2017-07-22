import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
import ProjectLinks from 'components/ProjectLinks';
import ss from './styles';
import projectSS from '../styles';

const Ezpz = ({
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
            <span>
                ezpz
                <span role="img" aria-label="ok hand"> 👌</span> 
            </span>
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
                ezpz is an open source css in js library that makes inline styles easy to use and keeps them consistent.
            </p>
        </div>
        <ProjectLinks 
            repository="hi"
            stack={['react']}
        />
    </div>;

export default Ezpz;
