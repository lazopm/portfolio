import React from 'react';
import { css } from 'aphrodite';

import ss from './styles';
import theme from 'constants/termTheme';
import Icon from 'components/Icon';

const Link = ({href, icon, text}) =>
    <a 
        className={css(ss.Link)} 
        href={href}
        title={text}
    >
        <Icon 
            name={icon}
            className={css(ss.Icon)} 
        />
        <span className={css(ss.Text)}>
            {text}
        </span>
    </a>;

const Links = () =>
    <div className={css(ss.Container)}>
        <Link
            text="github"
            href="https://www.github.com/lazopm"
            icon="github"
        />
        <Link
            text="linkedin"
            href="https://www.linkedin.com/in/pablo-lazo-b37701ba/"
            icon="linkedin"
        />
        <Link 
            text="resume"
            href=""
            icon="file-alt"
        />
        <Link
            text="pablo@lazopm.com"
            icon="envelope"
            href="mailto:pablo@lazopm.com"
        />
    </div>;

export default Links;
