import React from 'react';

import { renderRoutes } from 'react-router-config';
import Header from './Header';
import Routes from '../Routes';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <p>Testing footer</p>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default App;