import { Router } from "express";
import { productController } from "../controller/product-controller";
import { IRouter } from "./router.interface";

export class ProductRouter implements IRouter {
  private router: Router;

  constructor (router: Router) {
    this.router = router;
  }

  getAllRoutes(): void {
    this.routePostProduct();
    this.routeGetProducts();
  }

  public routePostProduct(): void {
    this.router.post('/products', productController.register);
  }

  public routeGetProducts(): void {
    this.router.get('/products', productController.findProducts);
  }
}