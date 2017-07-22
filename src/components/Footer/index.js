import React from 'react';
import { css } from 'aphrodite';

import ss from './styles'; 

const Footer = () =>
    <div className={css(
        ss.Container,
    )}>
        <div className={css(
            ss.Text,
        )}>
            © 2017 Pablo Lazo 
        </div>
    </div>;

export default Footer;
