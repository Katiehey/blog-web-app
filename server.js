import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// Path fix for ES modules
const __filename = fileURLToPath(import.meta.url);
//console.log(__filename);
const __dirname = path.dirname(__filename);
//console.log(__dirname);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Set EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", (req, res) => {
  res.render("pages/home");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
