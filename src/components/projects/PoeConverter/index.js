import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 

const PoeConverter = () =>
    <div className={css(ss.Container)}>
        <h1>Poe Converter</h1>
        <p>Currency converter for a game economy that uses item trading instead of a regular currency. It included a python web scrapping script to automatically fetch the contents in the user's in-game storage.</p>
    </div>;

export default PoeConverter;
