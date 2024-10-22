import { Router, json } from "express";
import { products } from "../constants/index.mjs";

const router = Router();

router.get("/products", (req, res) => {
  res.send(products);
});

router.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((item) => {
    return item._id === productId;
  });

  if (!productId) {
    return res.status(404).json({ message: "product not found " });
  }
  res.send(product);
});

export default router;
