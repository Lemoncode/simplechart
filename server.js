const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/home', (req, res) => {
      const actualPage = '/';
      app.render(req, res, actualPage);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(8080, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:8080');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
