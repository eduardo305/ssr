import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './client/src/Routes';

const app = express();
app.use(express.static('public'));

app.use('/', (req, res) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );
  
  const html = `
    <html>
      <head>
        <link
          rel="stylesheet"
          href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(4000, () => {
  console.log('Server is listening to port 4000');
});