import React from 'react';
import App from './App';
import { hydrate } from 'react-dom'
import { consolidateStreamedStyles } from 'styled-components'

consolidateStreamedStyles();

hydrate(<App />, document.getElementById('root'));
