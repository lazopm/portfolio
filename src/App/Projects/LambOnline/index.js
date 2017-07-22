import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
import ss from './styles';
import projectSS from '../styles';

const LambOnline = ({
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
            Lamb Online
            {active &&
                <Icon
                    name="times-square"
                    className={css(projectSS.CloseIcon)}
                    onClick={deactivate}
                />
            }
        </h2>
        <p className={css(projectSS.Description)}>
            Data entry web application for a bilingual school in Washington, DC. Both the UI and generated reports are displayed in English or Spanish depending on the teacher or parent's primary language.
        </p>
    </div>;

export default LambOnline;
