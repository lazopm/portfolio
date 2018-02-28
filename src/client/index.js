import React from 'react';
import { hydrate } from 'react-dom'
import { consolidateStreamedStyles } from 'styled-components'

const AppModulePromise = import(/* webpackChunkName: "app" */ './App');
consolidateStreamedStyles();

AppModulePromise.then(module => {
    const App = module.default;
    hydrate(<App />, document.getElementById('root'));
});
