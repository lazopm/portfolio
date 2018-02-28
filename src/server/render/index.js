import React from 'react';
import App from 'App';
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import template from './template';

const render = () => {
    const sheet = new ServerStyleSheet()
    const html = renderToString(sheet.collectStyles(<App />))
    const styleTags = sheet.getStyleTags() 
    return template(html, styleTags);
};

export default render;
