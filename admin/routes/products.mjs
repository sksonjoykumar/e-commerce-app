// import { Router, json } from "express";
// import { products } from "../constants/index.mjs";

// const router = Router();

// router.get("/products", (req, res) => {
//   res.send(products);
// });

// router.get("/products/:id", (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find((item) => {
//    return item._id === productId;
//   });

//   if (!productId) {
//     return res.status(404).json({ message: "product not found " });
//   }
//   res.send(product);
// });

// export default router;

import { Router } from "express";
import { products } from "../constants/index.mjs";

const router = Router();

// Route to get all products
router.get("/products", (req, res) => {
  // Check if products array is empty
  if (!products || products.length === 0) {
    return res.status(404).json({ message: "No products found." });
  }
  // Respond with the products array
  return res.status(200).json(products);
});

// Route to get a specific product by ID
router.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);

  // Validate productId
  if (isNaN(productId)) {
    return res.status(400).json({ message: "Invalid product ID." });
  }

  // Find the product with the given ID
  const product = products.find((item) => item._id === productId);

  // If product not found, respond with 404 status
  if (!product) {
    return res.status(404).json({ message: "Product not found." });
  }

  // Respond with the found product
  return res.status(200).json(product);
});

export default router;
