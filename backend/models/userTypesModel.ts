import { DataTypes } from "sequelize"
import { sequelize } from "../config/db"


export const UserTypes = sequelize.define(
  "UserTypes",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "user_types",
    timestamps: false,
  }
);