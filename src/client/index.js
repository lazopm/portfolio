import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { hydrate } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const AppModulePromise = import(/* webpackChunkName: "app" */ './App');

AppModulePromise.then(module => {
    const App = module.default;
    const app = (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );
    hydrate(app, document.getElementById('root'));
});
