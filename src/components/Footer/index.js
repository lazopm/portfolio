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
            This is a footer.
        </div>
    </div>;

export default Footer;
