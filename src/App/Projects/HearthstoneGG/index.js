import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import projectSS from '../styles';

const HearthstoneGG = ({
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
        <h2>HearthstoneGG</h2>
        <p>Several tools for the Hearthstone card game. This was my first big personal project, and was pretty successful with a couple hundred users at it's peak. Now days I have not had time to update it, but people still use the secrets helper tool.</p>
    </div>;

export default HearthstoneGG;
