import React from 'react';
import Terminal from 'components/Terminal';
import { css } from 'aphrodite';

import ss from './styles';

const App = () =>
    <div className={css(ss.MainContent)}>
        <Terminal/>
    </div>;

export default App;
