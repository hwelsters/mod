import verify from "../utils/verifyToken";

const shopController = require("../controllers/shopController");

const router = require("express").Router();

// BUY
router.post("/buy", verify, shopController.buy_post);

// GET ITEMS
router.get("/getitems", shopController.getitems_post);

export default router;
