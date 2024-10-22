// import { Router } from "express";
// import { categories } from "../constants/index.mjs";

// const router = Router();

// router.get("/categories", (req, res) => {
//   return res.send(categories);
// });

// router.get("/categories/:id", (req, res) => {
//   const categoryId = parseInt(req.params.id);
//   const category = categories.find((item) => {
//     return item?._id === categoryId;
//   });

//   if (!categoryId) {
//     return res.status(404).json({ message: "category not found" });
//   }
//   res.send(category);
// });

// export default router;

import { Router } from "express";
import { categories } from "../constants/index.mjs";

const router = Router();

// Route to get all categories
router.get("/categories", (req, res) => {
  if (!categories || categories.length === 0) {
    return res.status(404).json({ message: "No categories found." });
  }
  return res.status(200).json(categories);
});

// Route to get a specific category by ID
router.get("/categories/:id", (req, res) => {
  const categoryId = parseInt(req.params.id);

  // Validate the categoryId
  if (isNaN(categoryId)) {
    return res.status(400).json({ message: "Invalid category ID." });
  }

  const category = categories.find((item) => item?._id === categoryId);

  if (!category) {
    return res.status(404).json({ message: "Category not found." });
  }

  return res.status(200).json(category);
});

export default router;
