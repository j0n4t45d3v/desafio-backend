import { Router } from "express";
import { buyController } from "../controller/buy-controller";
import { IRouter } from "./router.interface";

export class BuyRouter implements IRouter {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  public getAllRoutes(): void {
    this.routeGetBuy();
    this.routePostBuy();
  }

  public routePostBuy(): void {
    this.router.post("/buy", buyController.register);
  }

  public routeGetBuy(): void {
    this.router.get("/buy", buyController.findBuys);
  }
}
