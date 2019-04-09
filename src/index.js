require('dotenv').config({ path: '.env' });

const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  options => {
    console.log(`> Server is runing on http://localhost:${options.port}`);
  }
);
