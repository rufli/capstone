const Hapi = require('@hapi/hapi');
const wisataRoutes = require('./api-wisata/routes-wisata'); // sesuaikan path ini
const rencanaRoutes = require('./api-itenary/routes-itenary'); // Uncomment if you have itinerary routes
const kategoriRoutes = require('./api-kategori/routes-kategori'); // sesuaikan path ini

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route([...wisataRoutes, ...rencanaRoutes, ...kategoriRoutes]);// Uncomment if you have itinerary routes

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();