import { Router } from "express";
import { IRouter } from "./router.interface";
import { historyController } from "../controller/history-controller";

export class HistoryRouter implements IRouter {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  getAllRoutes(): void {
    this.routeGetBuyHistory()
  }

  private routeGetBuyHistory(): void {
    this.router.get('/history', historyController.findAllBuys)
    this.router.get('/history/:clientId', historyController.findBuy)
  }
}
