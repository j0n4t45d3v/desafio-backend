import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
  HasOne,
} from "sequelize-typescript";
import { Transaction } from "./transaction.model";

export type CreditCardType = {
  card_number: string;
  card_holder_name: string;
  value: string;
  cvv: string;
  exp_date: string;
};

@Table({
  tableName: "credit_card",
})
export class CreditCard extends Model<CreditCard, CreditCardType> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;
  @Column(DataType.STRING)
  card_number!: string;
  @Column(DataType.STRING)
  card_holder_name!: string;
  @Column(DataType.FLOAT)
  value!: number;
  @Column(DataType.INTEGER)
  cvv!: number;
  @Column(DataType.STRING)
  exp_date!: string;

  @HasOne(() => Transaction)
  transaction!: CreditCard;
}
