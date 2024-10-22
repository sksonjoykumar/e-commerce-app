// import { Router } from "express";
// import { highlightsProducts } from "../constants/index.mjs";

// const router = Router();

// router.get("/highlights", (req, res) => {
//   res.send(highlightsProducts);
// });

// export default router;

import { Router } from "express";
import { highlightsProducts } from "../constants/index.mjs";

const router = Router();

// Route to get all highlighted products
router.get("/highlights", (req, res) => {
  // Check if highlightsProducts is empty
  if (!highlightsProducts || highlightsProducts.length === 0) {
    return res.status(404).json({ message: "No highlighted products found." });
  }

  // Respond with the highlighted products
  return res.status(200).json(highlightsProducts);
});

export default router;
