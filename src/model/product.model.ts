import {
  Table,
  Model,
  PrimaryKey,
  AutoIncrement,
  Column,
  DataType,
} from "sequelize-typescript";

export type ProductType = {
  title: string;
  zipcode: string;
  seller: string;
  thumbnailHd: string;
  date: string;
  price: number;
};

@Table({
  tableName: "products"
})
export class Product extends Model<Product, ProductType> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;
  @Column(DataType.STRING)
  title!: string;
  @Column(DataType.STRING)
  zipcode!: string;
  @Column(DataType.STRING)
  seller!: string;
  @Column(DataType.STRING)
  thumbnailHd!: string;
  @Column(DataType.STRING)
  date!: string;
  @Column(DataType.FLOAT)
  price!: number;
}
