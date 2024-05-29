import { Request, Response } from "express";
import { Product, ProductType } from "../model/product.model";

class ProductController {
  public async register(req: Request, res: Response): Promise<void> {
    const { title, price, zipcode, seller, thumbnailHd, date }: ProductType =
      req.body;

    await Product.create({
      title,
      zipcode,
      seller,
      thumbnailHd,
      date,
      price,
    });
    res.status(201).json(req.body);
  }

  public async findProducts(req: Request, res: Response): Promise<void> {
    let products: ProductType[] = await Product.findAll({
      attributes: [
        "title",
        "price",
        "zipcode",
        "seller",
        "thumbnailHd",
        "date",
      ],
    });
    res.status(200).json(products);
  }
}

export const productController = new ProductController();
