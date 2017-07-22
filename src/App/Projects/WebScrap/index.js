import React from 'react';
import { css } from 'aphrodite';

import Icon from 'components/Icon';
import ProjectLinks from 'components/ProjectLinks';
import ss from './styles';
import projectSS from '../styles';

const WebScrap = ({
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
            Web Scrap Sample
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
                Script and tools to extract a whole country's population data from a web service and put them in a database. Threaded to make the ~19 million records faster to download. Separate script to verify downloaded records and a small Flask app to view the data.
            </p>
        </div>
        <ProjectLinks 
            repository="hi"
            demo="hi"
            stack={['react']}
        />
    </div>;

export default WebScrap;
