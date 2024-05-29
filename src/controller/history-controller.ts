import { Buy } from "../model/buy.model";

class HistoryController {
  public async findAllBuys(req: Request, res: Response): Promise<void> {
    const buys = await Buy.findAll({
      attributes: ["client_id", "purchase_id", "value", "date", "card_number"],
    });
    res.status(200).json(buys);
  }

  public async findBuy(req: Request, res: Response): Promise<void> {
    const clientId: number = req.params.clientId;
    
    const buys = await Buy.findAll({
      attributes: ["client_id", "purchase_id", "value", "date", "card_number"],
      where: {
        client_id: clientId
      }
    });
    res.status(200).json(buys);
  }
}

export const historyController = new HistoryController();
