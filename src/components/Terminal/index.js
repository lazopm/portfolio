import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import ss from './styles';
import Line from './Line';

const Terminal = ({ lines }) => 
	<div className={css(ss.Container)}>
		{lines.map((line, i) => (
			<Line 
				key={`${line}${i}`}
				text={line}
				number={i + 1}
				cursor={lines.length - i === 1} 
			/>
		))}
	</div>;

Terminal.defaultProps = {
    lines: [
        'hello',
        'world th ehas asjhdlaksd aksd jalksd jalksd alsdk jalsk dfasd fkadsfj laksdf alkdsf ajkldsf jaskdlf jaldksf jalkdf jakldf jalksdfasdfasdfsa',
    ]
};
Terminal.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Terminal;
