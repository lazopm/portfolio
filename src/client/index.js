import React from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const asyncImports = [
    import(/* webpackChunkName: "app" */ 'components/App'),
    import(/* webpackChunkName: "app" */'react-dom'),
    import(/* webpackChunkName: "app" */'react-apollo'),
];

const client = new ApolloClient({
    link: createHttpLink(),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

Promise.all(asyncImports).then(([
    {default: App},
    { hydrate },
    { ApolloProvider },
]) =>
    hydrate(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
        document.getElementById('root')
    )
);
