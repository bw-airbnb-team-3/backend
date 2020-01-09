const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router');
const listingRouter = require('../auth/listing-route');
const dsRouter = require('../auth/ds-router');
const authenticate = require('../auth/auth-middleware.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter);
server.use('/api/', dsRouter);
server.use('/api/auth', authenticate, listingRouter);

server.get('/', (req, res) => {
  res.json({ message: "Server is up and running!!"  })
})

module.exports = server;