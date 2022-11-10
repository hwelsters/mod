import itemsForSale from "../data/itemsForSale";
import { Request, Response } from "express";
import db from "../services/database";

const isValidBuyRequest = (req: any) => {
    return req.body.itemId !== null && req.body.itemId >= 0 && req.body.itemId < itemsForSale.length && req.body.userId !== null;
}

module.exports.buy_post = (req: any, res: Response) => {
    console.log("BODY", req.body);
    console.log("USER", req.user);
  // CHECK IF IT IS A VALID ITEM
  if (!isValidBuyRequest(req)) {
    return res.status(500).json("Incorrect formatted request");
  }

  const q = "SELECT * FROM Users WHERE id = ?";
  db.query(q, [req.body.userId], (err: any, data: any) => {
    if (data.length === 0) return res.status(403).json("User doesn't exist!");
    if (data[0].id !== req.user.id) {
      return res
        .status(403)
        .json("You are not authorized to buy this item for this user");
    }

    data[0].gems = data[0].gems - itemsForSale[req.body.itemId].cost;
    if (data[0].gems < 0) return res.status(403).json("You don't have enough money!");
    
    const {password, ...other} = data[0];
    const q1 = "UPDATE Users SET gems = ? WHERE id = ?";
    db.query(q1, [data[0].gems, data[0].id], (err1 : any, data1: any)=>{return res.status(200).json(other)});
  });
};

// JUST RETURNS A LIST OF ALL THE ITEMS FOR SALE
module.exports.getitems_post = (req: Request, res: Response) => {
  res.status(200).json(itemsForSale);
};
