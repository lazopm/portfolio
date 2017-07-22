import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import projectSS from '../styles';

const PoeConverter = ({
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
        <h2>Poe Converter</h2>
        <p>Currency converter for a game economy that uses item trading instead of a regular currency. It included a python web scrapping script to automatically fetch the contents in the user's in-game storage.</p>
    </div>;

export default PoeConverter;
