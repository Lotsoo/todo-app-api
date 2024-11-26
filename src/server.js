const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.Server({
    port: process.env.PORT || 5000,
    host: '0.0.0.0'
  });
  await server.start();
  server.route(routes);
  console.log(`Server running on ${server.info.uri}`);

};
init();