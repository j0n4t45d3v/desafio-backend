import {
  Table,
  Model,
  PrimaryKey,
  Column,
  DataType,
  Default,
} from "sequelize-typescript";
import {v4 as uuidv4} from 'uuid'


export type BuyType = {
  card_number: string;
  client_id: string;
  value: string;
  date: string;
};

@Table({
  tableName: "buys"
})
export class Buy extends Model<Buy, BuyType> {
  @PrimaryKey
  @Default(uuidv4)
  @Column(DataType.UUID)
  purchase_id!: string;
  @Column(DataType.STRING)
  client_id!: string;
  @Column(DataType.FLOAT)
  value!: number;
  @Column(DataType.DATE)
  date!: string;
  @Column(DataType.STRING)
  card_number!: string;
}
