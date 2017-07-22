import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
import ProjectLinks from 'components/ProjectLinks';
import ss from './styles';
import projectSS from '../styles';

const PoeConverter = ({
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
            Poe Converter
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
                Currency converter for a game economy that uses item trading instead of a regular currency. It included a python web scrapping script to automatically fetch the contents in the user's in-game storage.
            </p>
        </div>
        <ProjectLinks 
            repository="hi"
            demo="hi"
            stack={['react']}
        />
    </div>;

export default PoeConverter;
