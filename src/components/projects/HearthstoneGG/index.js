import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 

const HearthstoneGG = () =>
    <div className={css(ss.Container)}>
        <h1>HearthstoneGG</h1>
        <p>Several tools for the Hearthstone card game. This was my first big personal project, and was pretty successful with a couple hundred users at it's peak. Now days I have not had time to update it, but people still use the secrets helper tool.</p>
    </div>;

export default HearthstoneGG;
