import React from 'react';

const asyncImports = [
    import(/* webpackChunkName: "app" */ 'components/Terminal'),
    import(/* webpackChunkName: "app" */ 'react-dom'),
];

Promise.all(asyncImports).then(
    ([{ default: Terminal }, { hydrate }]) =>
        hydrate(
            <Terminal />,
            document.getElementById('terminal'),
        ),
);
