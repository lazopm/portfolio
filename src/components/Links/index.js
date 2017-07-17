import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import theme from 'constants/termTheme';
import Icon from 'components/Icon';

const Links = () =>
    <div className={css(ss.Container)}>
        <a 
            className={css(ss.Link)} 
            href="https://www.github.com/lazopm"
        >
            <Icon 
                name="github"
                sprite="brands"
                color={theme[4]}
                className={css(ss.Icon)} 
            />
            <span className={css(ss.Text)}>
                github
            </span>
        </a>
        <a 
            className={css(ss.Link)} 
            href="https://www.linkedin.com/in/pablo-lazo-b37701ba/"
        >
            <Icon 
                name="linkedin"
                sprite="brands"
                color={theme[4]}
                className={css(ss.Icon)} 
            />
            <span className={css(ss.Text)}>
                linkedin
            </span>
        </a>
        <a 
            className={css(ss.Link)} 
            href=""
        >
            <Icon 
                name="file-alt"
                sprite="solid"
                color={theme[4]}
                className={css(ss.Icon)} 
            />
            <span className={css(ss.Text)}>
                resume
            </span>
        </a>
        <a 
            className={css(ss.Link)} 
            href="mailto:lazopm@gmail.com"
        >
            <Icon 
                name="envelope"
                sprite="solid"
                color={theme[4]}
                className={css(ss.Icon)} 
            />
            <span className={css(ss.Text)}>
                lazopm@gmail.com
            </span>
        </a>
    </div>;

export default Links;
