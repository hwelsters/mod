import itemsForSale from "../data/itemsForSale";
import { Request, Response } from "express";
import db from "../services/database";

module.exports.buy_post = (req: Request, res: Response) => {
  const q = "SELECT * FROM Users WHERE email = ?";

  db.query(q, [req.body.email], (err: any, data: any) => {
    
  });
};

// JUST RETURNS A LIST OF ALL THE ITEMS FOR SALE
module.exports.getitems_post = (req: Request, res: Response) => {
  res.status(200).json(itemsForSale);
};
