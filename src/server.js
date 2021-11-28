const Hapi = require('@hapi/hapi');
require('dotenv').config();

const init = async () => {
  const server = Hapi.server({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  });

  await server.start();
  console.log(`Server running on: ${server.info.uri}`);
};

init();
