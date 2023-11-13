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
    const userId = req.params.id;

    try {
      const user = await User.findByPk(userId);

      if (!user) {
        return res.status(404).json({
          message: "User tidak ditemukan",
        });
      }

      res.json({
        message: "Berhasil mendapatkan data user",
        data: user,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        message: "Gagal mendapatkan data user",
        error: error.message,
      });
    }
  },
};
