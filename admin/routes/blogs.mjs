// import { Router } from "express";
// import { blogsData } from "../constants/index.mjs";

// const router = Router();

// router.get("/blogs", (req, res) => {
//   res.send(blogsData);
// });

// export default router;

import { Router } from "express";
import { blogsData } from "../constants/index.mjs"; // Ensure this path is correct

const router = Router();

// Route to get all blogs
router.get("/blogs", (req, res) => {
  try {
    // Check if blogsData is available
    if (!blogsData || blogsData.length === 0) {
      return res.status(404).json({ message: "No blogs found." });
    }

    // Respond with the blogs data
    res.status(200).json(blogsData);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

export default router;
