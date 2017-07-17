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
        '   ___       __   __       __                    ',
        '  / _ \\___  / /  / /__    / /  ___  ___ ___     ',
        ' / ___/ _ `/ _ \\/ / _ \\  / /__/ _ `/_ // _ \\  ',
        '/_/   \\___/____/_/\\___/ /____/\\___//__/\\___/ ',
        'Front End Developer based in Washington, DC.',
        '',
        'Hello! I\'m Pablo, I make web stuff.',
        'Thanks for visiting my portfolio!',
        'Check out some of my work below, or drop me a line at lazopm@gmail.com.',
        'You can check out the <a href="banana">source code</a> for this page at my github.',
        '',
        '-Pablo',
    ]
};
Terminal.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Terminal;
