import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import Terminal from 'components/Terminal';
import Face from 'components/Face';

const App = () =>
    <div className={css(ss.MainContent)}>
		<div>
			<Face/>
		</div>
        <Terminal/>
    </div>;

export default App;
