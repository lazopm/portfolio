import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
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
        <p className={css(projectSS.Description)}>
            A simple portfolio to showcase my work. This was my first attempt at creating a responsive website without any css frameworks. Includes a custom control panel to manage projects.
        </p>
    </div>;

export default OldPortfolio;
