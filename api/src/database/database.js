import Sequelize from "sequelize";

export const sequelize = new Sequelize("letterboxd", "postgres", "password", {
    host: "localhost",
    dialect: "postgres",
});
