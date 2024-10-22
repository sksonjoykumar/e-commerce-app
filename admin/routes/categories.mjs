import { Router } from "express";
import { categories } from "../constants/index.mjs";

const router = Router();

router.get("/categories", (req, res) => {
  return res.send(categories);
});

router.get("/categories/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);
  const category = categories.find((item) => {
    return item?._id === categoryId;
  });

  if (!categoryId) {
    return res.status(404).json({ message: "category not found" });
  }
  res.send(category);
});

export default router;
