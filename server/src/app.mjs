// Importing necessary modules
import express from "express"; // Importing express module for creating server
import mongoose from "mongoose"; // Importing mongoose module for connecting to MongoDB
import cors from "cors"; // Importing cors module for enabling Cross-Origin Resource Sharing

import {
  getAllCars,
  getCarById,
  addCar,
  updateCarById,
  updateMultipleCars,
  deleteCarById,
} from "./controllers/carController.mjs"; // Importing the car controller module
import { envConfig } from "./constants/env-config.mjs";

// Creating a new express application
const app = express();

// Adding middleware for enabling CORS and parsing incoming JSON data
app.use(cors());
app.use(express.json());

// Connecting to MongoDB database with specified URL and options
mongoose
  .connect(envConfig.mongoUrl)
  .then(() => console.log("Successfully connected to MongoDB"));

// Route for getting all cars data
app.get("/cars", getAllCars);

// Route for getting cars data by ID
app.get("/cars/:id", getCarById);

// Route for adding a new car
app.post("/cars", addCar);

// Route for updating a car by ID
app.put("/cars/:id", updateCarById);

// Route for updating multiple cars
app.put("/cars", updateMultipleCars);

// Route for deleting a car by ID
app.delete("/cars/:id", deleteCarById);

// Exporting the main express app for using in other modules
const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`server listening at http://localhost:${port}`)
);
