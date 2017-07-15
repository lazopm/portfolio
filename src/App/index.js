import React from 'react';
import Terminal from 'components/Terminal';
import { css } from 'aphrodite';

import styles from './styles';

const App = () =>
    <div className={css(styles.MainContent)}>
        <Terminal/>
    </div>;

export default App;
