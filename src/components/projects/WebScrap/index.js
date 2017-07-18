import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 

const WebScrap = () =>
    <div className={css(ss.Container)}>
        <h1>Web Scrap Sample</h1>
        <p>Script and tools to extract a whole country's population data from a web service and put them in a database. Threaded to make the ~19 million records faster to download. Separate script to verify downloaded records and a small Flask app to view the data.</p>
    </div>;

export default WebScrap;
