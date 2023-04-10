// Import the mongoose module
import { Schema, model } from "mongoose";

// Create a new schema for the Car model
const carSchema = new Schema({
  make: String,
  model: String,
  registrationNumber: String,
  currentOwner: String,
  year: Number,
});

// Create a new Car model based on the schema and export it
const Car = model("Car", carSchema);
export default Car;
