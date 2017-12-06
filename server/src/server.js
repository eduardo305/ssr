import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/src/components/Home';

const app = express();
app.use(express.static('public'));

app.use('/', (req, res) => {
  const content = renderToString(<Home />);

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