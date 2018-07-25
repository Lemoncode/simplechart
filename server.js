const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/pageA', (req, res) => {
      const actualPage = '/pageA/pageA';
      app.render(req, res, actualPage);
    });

    server.get('/pageB', (req, res) => {
      const actualPage = '/pageB/pageB';
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
