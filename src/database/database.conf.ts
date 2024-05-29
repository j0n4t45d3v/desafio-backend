import { Sequelize } from "sequelize-typescript";
import { Product } from "../model/product.model";
import { Transaction } from "../model/transaction.model";
import { CreditCard } from "../model/credit-card.model";
import { Buy } from "../model/buy.model";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:",
  models: [Product, Transaction, CreditCard, Buy],
});

export const connectDatabase = async () => {
  try {
    console.log(">>> Database connect...");
    sequelize.sync({ force: true, logging: false });
    console.log(">>> Database syncronizeed...");
  } catch (error) {
    console.error(">>> Error connect database...");
  }
};
