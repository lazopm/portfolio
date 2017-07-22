import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
import ProjectLinks from 'components/ProjectLinks';
import ss from './styles';
import projectSS from '../styles';

const HearthstoneGG = ({
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
            HearthstoneGG
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
                Several tools for the Hearthstone card game. This was my first big personal project, and was pretty successful with a couple hundred users at it's peak. Now days I have not had time to update it, but people still use the secrets helper tool.
            </p>
        </div>
        <ProjectLinks 
            stack={['react']}
        />
    </div>;

export default HearthstoneGG;
