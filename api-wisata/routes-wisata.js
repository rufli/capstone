const {
  tambahWisataHandler,
  ambilWisataHandler,
  detailWisataHandler,
  ubahWisataHandler,
  hapusWisataHandler,
} = require('./handler-wisata');

const wisataRoutes = [
  {
    method: 'POST',
    path: '/wisata/tambah',
    handler: tambahWisataHandler,
  },
  {
    method: 'GET',
    path: '/wisata/ambil',
    handler: ambilWisataHandler,
  },
  {
    method: 'GET',
    path: '/wisata/detail/{wisataId}',
    handler: detailWisataHandler,
  },
  {
    method: 'PUT',
    path: '/wisata/edit/{wisataId}',
    handler: ubahWisataHandler,
  },
  {
    method: 'DELETE',
    path: '/wisata/hapus/{wisataId}',
    handler: hapusWisataHandler,
  },
];

module.exports = wisataRoutes;
