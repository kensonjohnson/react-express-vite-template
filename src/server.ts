import express from "express";
import { chdir } from "process";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
if (process.env.NODE_ENV === "development") {
  chdir("build");
}
app.use(express.static("frontend"));

// Routes
import pingRouter from "./routes/ping.js";

app.use("/ping", pingRouter);

// Start server
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
