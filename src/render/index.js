import React from 'react';
import App from 'components/App';
import template from './template';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import pullData from './pullData';

const render = async () => {
    const githubData = await pullData();
    const sheet = new ServerStyleSheet();
    const html = renderToString(sheet.collectStyles(<App githubData={githubData}/>));
    const styleTags = sheet.getStyleTags();
    console.log(template(html, styleTags));
}

render();

