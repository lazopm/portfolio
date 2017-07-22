import React from 'react';
import { css } from 'aphrodite';

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
            active && projectSS.Active,
        )}
    >
        <h2>Web Scrap Sample</h2>
        <p>Script and tools to extract a whole country's population data from a web service and put them in a database. Threaded to make the ~19 million records faster to download. Separate script to verify downloaded records and a small Flask app to view the data.</p>
    </div>;

export default WebScrap;
