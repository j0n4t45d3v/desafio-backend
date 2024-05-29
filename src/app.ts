import express, { Application, Router } from "express";
import { ProductRouter } from "./router/product-router";
import { BuyRouter } from "./router/buy-router";
import { HistoryRouter } from "./router/history-router";
import { connectDatabase } from "./database/database.conf";

class ExpressApp {
  private express: Application;
  private router: Router;

  public constructor() {
    connectDatabase();
    this.express = express();
    this.router = Router();

    this.routes();
    this.express.use(express.json());
    this.express.use("/starstore", this.router);
  }

  private middleware(): void {}

  private routes(): void {
    const productRouter: ProductRouter = new ProductRouter(this.router);
    const buyRouter: BuyRouter = new BuyRouter(this.router);
    const historyRouter: HistoryRouter = new HistoryRouter(this.router);
    
    productRouter.getAllRoutes();
    buyRouter.getAllRoutes();
    historyRouter.getAllRoutes();
  }

  public start(port: number): void {
    this.express.listen(port, () => {
      console.log(`Application running in ${port}`);
    });
  }
}

export default new ExpressApp();
