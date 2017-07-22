import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import Project from 'components/Project';

const WebScrap = () =>
    <Project
        className={css(ss.Container)}
        title="Web Scrap Sample"
        description="Script and tools to extract a whole country's population data from a web service and put them in a database. Threaded to make the ~19 million records faster to download. Separate script to verify downloaded records and a small Flask app to view the data."
    >
    </Project>

export default WebScrap;
