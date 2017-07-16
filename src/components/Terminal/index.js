import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite';

import ss from './styles';
import Line from './Line';
import Status from './Status';

const Terminal = ({ lines }) => 
    <div className={css(ss.Container)}>
        <div className={css(ss.Lines)}>
            {lines.map((line, i) => (
                <Line 
                    key={`${line}${i}`}
                    text={line}
                    number={i + 1}
                    cursor={lines.length - i === 1} 
                />
            ))}
        </div>
        <Status
            line={lines.length}
            char={lines[lines.length - 1].length + 1}
        />
    </div>;

Terminal.defaultProps = {
    lines: [
        '    ____        __    __         __',
        '   / __ \\____ _/ /_  / /___     / /   ____ _____  ____',
        '  / /_/ / __ `/ __ \\/ / __ \\   / /   / __ `/_  / / __ \\',
        ' / ____/ /_/ / /_/ / / /_/ /  / /___/ /_/ / / /_/ /_/ /',
        '/_/    \\__,_/_.___/_/\\____/  /_____/\\__,_/ /___/\\____/',
        '     Front End Developer based in Washington, DC.',
        '',
        'Hello!',
        'I\'m Pablo, I make web stuff.',
    ]
};
Terminal.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Terminal;
