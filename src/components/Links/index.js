import React from 'react';
import PropTypes from 'prop-types';
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
            <Icon color={theme[4]} sprite="brands" name="github"/>
        </a>
        <a 
            className={css(ss.Link)} 
            href="https://www.linkedin.com/in/pablo-lazo-b37701ba/"
        >
            <Icon color={theme[4]} sprite="brands" name="linkedin"/>
        </a>
        <a 
            className={css(ss.Link)} 
            href=""
        >
            <Icon color={theme[4]} sprite="solid" name="file-pdf"/>
        </a>
        <a 
            className={css(ss.Link)} 
            href="mailto:lazopm@gmail.com"
        >
            <Icon color={theme[4]} sprite="solid" name="envelope"/>
        </a>
    </div>;

export default Links;
