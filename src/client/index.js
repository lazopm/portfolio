import React from 'react';
import { hydrate } from 'react-dom'

const AppModulePromise = import(/* webpackChunkName: "app" */ './App');

AppModulePromise.then(module => {
    const App = module.default;
    hydrate(<App />, document.getElementById('root'));
});
