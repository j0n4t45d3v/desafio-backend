import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { CreditCard } from "./credit-card.model";

export type TransactionType = {
  client_id: string;
  client_name: string;
  total_to_pay: string;
  credit_card_id: number;
};

@Table({
  tableName: "transactions",
})
export class Transaction extends Model<Transaction, TransactionType> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;
  @Column(DataType.STRING)
  client_id!: string;
  @Column(DataType.STRING)
  client_name!: string;
  @Column(DataType.STRING)
  total_to_pay!: string;
  @ForeignKey(() => CreditCard)
  @Column(DataType.INTEGER)
  credit_card_id!: number;

  @BelongsTo(() => CreditCard)
  credit_card!: CreditCard;
}
