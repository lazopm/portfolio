import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
import ss from './styles';
import projectSS from '../styles';

const UsnReact = ({
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
            USN React Presentation
            {active &&
                <Icon
                    name="times-square"
                    className={css(projectSS.CloseIcon)}
                    onClick={deactivate}
                />
            }
        </h2>
        <p className={css(projectSS.Description)}>
            A little React word game app I coded for a live demo at work.
        </p>
    </div>;

export default UsnReact;
