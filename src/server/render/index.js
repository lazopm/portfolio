import React from 'react';
import App from 'App';
import { getDataFromTree } from 'react-apollo';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components'
import template from './template';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { SchemaLink } from 'apollo-link-schema';
import { InMemoryCache } from 'apollo-cache-inmemory';
import schema from '../schema';

export default () => (req, res) => { 
	const client = new ApolloClient({
		ssrMode: true,
		link: new SchemaLink({ schema }),
		cache: new InMemoryCache(),
	});

    const app = (
        <ApolloProvider client={client}>
			<App />
		</ApolloProvider>
    );
    getDataFromTree(app).then(() => {
        const sheet = new ServerStyleSheet();
        const html = renderToString(sheet.collectStyles(app));
        const styleTags = sheet.getStyleTags();
        const apolloState = JSON.stringify(client.cache.extract()).replace(/</g, '\\u003c');
        res.status(200);
        res.send(template(html, styleTags, apolloState));
        res.end();
    });
};
