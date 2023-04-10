import Car from "../models/car.mjs";

// Function for getting all cars data
export async function getAllCars(req, res) {
  try {
    const cars = await Car.find({});
    console.log(cars);
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Function for getting cars data by ID
export async function getCarById(req, res) {
  try {
    const car = await Car.findById(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Function for adding a new car
export async function addCar(req, res) {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Function for updating a car by ID
export async function updateCarById(req, res) {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Function for updating multiple cars
export async function updateMultipleCars(req, res) {
  try {
    const cars = req.body;
    const updates = cars.map(async (car) => {
      const updatedCar = await Car.findByIdAndUpdate(car.id, car, {
        new: true,
      });
      return updatedCar;
    });
    const updatedCars = await Promise.all(updates);
    res.status(200).json(updatedCars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Function for deleting a car by ID
export async function deleteCarById(req, res) {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    res.status(200).json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
