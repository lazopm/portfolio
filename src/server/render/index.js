import React from 'react';
import App from 'components/App';
import template from './template';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import fetch from 'node-fetch';
import { getDataFromTree } from 'react-apollo';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
        fetch,
        uri: 'https://api.github.com/graphql',
        headers: {
            authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
    }),
    cache: new InMemoryCache(),
});

export default () => (req, res) => {
    const app = (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );

    getDataFromTree(app).then(() => {
        const sheet = new ServerStyleSheet();
        const html = renderToString(sheet.collectStyles(app));
        const styleTags = sheet.getStyleTags();
        const apolloState = JSON.stringify(client.cache.extract()).replace(
            /</g,
            '\\u003c',
        );
        res.status(200);
        res.send(template(html, styleTags, apolloState));
        res.end();
    });
};
