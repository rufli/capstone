const connection = require('../scripts/data/database'); // Sesuaikan path ini jika perlu

// Tambah rencana
const tambahRencanaHandler = async (request, h) => {
  const { wisataId, tanggal, jam } = request.payload;

  if (!wisataId || !tanggal || !jam) {
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan rencana. Mohon lengkapi semua data wajib',
    }).code(400);
  }

  try {
    await connection.query(
      'INSERT INTO rencana_perjalanan (tempat_wisata_id, tanggal, jam) VALUES (?, ?, ?)',
      [wisataId, tanggal, jam]
    );

    return h.response({
      status: 'success',
      message: 'Rencana perjalanan berhasil ditambahkan',
    }).code(201);
  } catch (error) {
    console.error(error);
    return h.response({
      status: 'fail',
      message: 'Gagal menambahkan rencana perjalanan',
      error: error.message,
    }).code(500);
  }
};

// Ambil semua rencana
const getRencanaHandler = async (request, h) => {
  try {
    const [rows] = await connection.query(
      `
      SELECT rencana_perjalanan.id, tempat_wisata.nama AS nama_wisata, rencana_perjalanan.tanggal, rencana_perjalanan.jam
      FROM rencana_perjalanan
      JOIN tempat_wisata ON rencana_perjalanan.tempat_wisata_id = tempat_wisata.id
      `
    );

    return h.response({
      status: 'success',
      data: {
        rencana: rows,
      },
    });
  } catch (error) {
    console.error(error);
    return h.response({
      status: 'fail',
      message: 'Gagal mengambil data rencana perjalanan',
      error: error.message,
    }).code(500);
  }
};

// Hapus rencana
const hapusRencanaHandler = async (request, h) => {
  const { id } = request.params;

  try {
    const [result] = await connection.query(
      'DELETE FROM rencana_perjalanan WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return h.response({
        status: 'fail',
        message: 'Rencana tidak ditemukan',
      }).code(404);
    }

    return h.response({
      status: 'success',
      message: 'Rencana berhasil dihapus',
    });
  } catch (error) {
    return h.response({
      status: 'fail',
      message: 'Gagal menghapus rencana',
      error: error.message,
    }).code(500);
  }
};

// Edit rencana
const editRencanaHandler = async (request, h) => {
  const { id } = request.params;
  const { wisataId, tanggal, jam } = request.payload;

  try {
    const [result] = await connection.query(
      'UPDATE rencana_perjalanan SET tempat_wisata_id = ?, tanggal = ?, jam = ? WHERE id = ?',
      [wisataId, tanggal, jam, id]
    );

    if (result.affectedRows === 0) {
      return h.response({
        status: 'fail',
        message: 'Rencana tidak ditemukan',
      }).code(404);
    }

    return h.response({
      status: 'success',
      message: 'Rencana berhasil diperbarui',
    });
  } catch (error) {
    return h.response({
      status: 'fail',
      message: 'Gagal memperbarui rencana',
      error: error.message,
    }).code(500);
  }
};

module.exports = {
  tambahRencanaHandler,
  getRencanaHandler,
  hapusRencanaHandler,
  editRencanaHandler,
};
