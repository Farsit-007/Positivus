const express = require('express');

const PORT = Number.parseInt(process.env.PORT ?? '5000', 10);

const app = express();

app.get('/', (_, res) => {
  res.json({ message: 'Hello from the Positivus CI/CD demo (Node.js)!' });
});

app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;

