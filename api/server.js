const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/auth-router');
const listingRouter = require('../auth/listing-route');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter);
server.use('/api/auth', listingRouter);

server.get('/', (req, res) => {
  res.json({ message: "Server is up and running!!"  })
})

module.exports = server;