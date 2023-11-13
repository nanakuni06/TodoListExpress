"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const currentDate = new Date();

    await queryInterface.bulkInsert("Todos", [
      {
        value: "Belajar Node JS",
        userID: "1",
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        value: "Belajar Express JS",
        userID: "1",
        createdAt: currentDate,
        updatedAt: currentDate,
      },
      {
        value: "Belajar Sequelize",
        userID: "1",
        createdAt: currentDate,
        updatedAt: currentDate,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
