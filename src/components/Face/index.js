import React from 'react'; 
import ascii from './ascii';
import { css } from 'aphrodite';

import ss from './styles';

const Face = () =>
	<div className={css(ss.Container)}>
		<pre className={css(ss.Ascii)}>
			{ascii}
		</pre>
	</div>;

export default Face;
