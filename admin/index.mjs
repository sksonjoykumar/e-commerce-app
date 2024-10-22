// // Server create using express js
// import express from "express";
// import "dotenv/config";
// import { fileURLToPath } from "url";
// import path from "path";
// import { readdirSync } from "fs";
// import cors from "cors";

// // Initialize __dirname and __filename right after imports
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// const port = process.env.PORT || 8000;

// // Middleware to enable CORS
// app.use(
//   cors({
//     // origin: "http://localhost:5173", // React frontend origin
//     origin: "*", // Allow all origins
//   })
// );

// // Middleware for parsing JSON and urlencoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve static files from the public directory
// app.use(express.static(path.join(__dirname, "public")));

// // Dynamically load route files from the 'routes' directory
// const routesPath = path.resolve(__dirname, "./routes");
// const routeFiles = readdirSync(routesPath);

// routeFiles.map(async (file) => {
//   const routeModule = await import(`./routes/${file}`);
//   app.use("/", routeModule.default); // Assuming route file exports a router
// });

// // Route to serve the index.html
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
import express from "express";
import cors from "cors"; // Import the cors package
import "dotenv/config";
import { fileURLToPath } from "url";
import path from "path";
import { readdirSync } from "fs";
import { config } from "./config.js"; // Import the config

// Initialize __dirname and __filename right after imports
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8000;

// Use CORS middleware and allow requests from the frontend origin
app.use(
  cors({
    origin: ["https://shopping-nu-drab.vercel.app"], // Add your frontend domain here
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow headers you need
    credentials: true, // If you're using cookies or sessions
  })
);

// Handle preflight CORS requests (for non-GET methods)
app.options("*", cors());

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Dynamically load route files from the 'routes' directory
const routesPath = path.resolve(__dirname, "./routes");
const routeFiles = readdirSync(routesPath);

routeFiles.map(async (file) => {
  const routeModule = await import(`./routes/${file}`);
  app.use("/", routeModule.default); // Assuming route file exports a router
});

// Route to serve the index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
