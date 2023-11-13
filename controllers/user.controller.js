const { User } = require("../models");

module.exports = {
  getAlluser: async (req, res) => {
    try {
      const users = await User.findAll();

      res.json({
        message: "Berhasil mendapatkan data user",
        data: users,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        success: false,
        error: "Gagal mendapatkan data user",
      });
    }
  },

  getUserById: async (req, res) => {
    // Implementasi fungsi untuk mendapatkan user berdasarkan ID
  },

  addUser: async (req, res) => {
    // Implementasi fungsi untuk menambahkan user
  },
};
