import React from 'react';

import App from './components/App';
import Homepage from './components/Home';

export default [
  {
    component: App,
    routes: [
      {
        component: Homepage,
        path: '/',
        exact: true
      }
    ]
  }
];

