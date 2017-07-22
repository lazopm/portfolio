import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 
import Project from 'components/Project';

const PoeConverter = () =>
    <Project
        className={css(ss.Container)}
        title="Poe Converter"
        description="Currency converter for a game economy that uses item trading instead of a regular currency. It included a python web scrapping script to automatically fetch the contents in the user's in-game storage."
    >
    </Project>;

export default PoeConverter;
