import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import Terminal from 'components/Terminal';
import Face from 'components/Face';
import Links from 'components/Links';

const App = () =>
	<div className={css(ss.Wrapper)}>
		<div className={css(ss.Header)}>
            <Face/>
            <Terminal/>
            <Links/>
		</div>
		<div className={css(ss.Main)}>
			stuff
		</div>
    </div>;

export default App;
