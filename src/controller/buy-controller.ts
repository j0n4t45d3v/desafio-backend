import { Request, Response } from "express";
import { Transaction, TransactionType } from "../model/transaction.model";
import { CreditCard, CreditCardType } from "../model/credit-card.model";
import { Buy } from "../model/buy.model";

type TransactionRequest = {
  client_id: string;
  client_name: string;
  total_to_pay: string;
  credit_card: CreditCardType;
};

class BuyController {
  constructor() {
    this.register = this.register.bind(this);
  }

  public async register(req: Request, res: Response): Promise<void> {
    let {
      client_id,
      credit_card,
      client_name,
      total_to_pay,
    }: TransactionRequest = req.body;

    const creditCard = await CreditCard.create(credit_card);

    await Transaction.create({
      client_id,
      client_name,
      credit_card_id: creditCard.id,
      total_to_pay,
    });
    creditCard.card_number = this.maskCardNumber(credit_card.card_number);

    Buy.create({
      card_number: creditCard.card_number,
      client_id,
      date: new Date().toString(),
      value: total_to_pay,
    });

    res.status(201).location("/buy").json({ message: "Buy complete" });
  }

  public async findBuys(req: Request, res: Response): Promise<void> {
    const trasactions = await Transaction.findAll({
      include: [
        {
          model: CreditCard,
          as: "credit_card",
          attributes: { exclude: ["id"] },
        },
      ],
      attributes: { exclude: ["id"] },
    });
    res.status(200).json(trasactions);
  }

  private maskCardNumber(cardNumber: string): string {
    if (cardNumber === null || cardNumber === undefined) {
      return "";
    }
    let fourLastNumbers: string = cardNumber.substring(cardNumber.length - 4);
    return `**** **** **** ${fourLastNumbers}`;
  }
}

export const buyController = new BuyController();
