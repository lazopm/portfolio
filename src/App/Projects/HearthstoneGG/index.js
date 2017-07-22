import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import Project from 'components/Project';

const HearthstoneGG = () =>
    <Project
        className={css(ss.Container)}
        title="HearthstoneGG"
        description="Several tools for the Hearthstone card game. This was my first big personal project, and was pretty successful with a couple hundred users at it's peak. Now days I have not had time to update it, but people still use the secrets helper tool."
    >
    </Project>;

export default HearthstoneGG;
