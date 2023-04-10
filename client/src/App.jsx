import { useState, useEffect } from "react";

import { envConfig } from "./constants/env-config";
import Home from "./components/Home";
import CarForm from "./components/CarForm";
import CarTable from "./components/CarTable";
import UpdateCarForm from "./components/UpdateCarForm";

function App() {
  // Define states for input values and list of cars
  const [cars, setCars] = useState([]);
  // This keeps track of the car we want to update
  const [selectedCar, setSelectedCar] = useState(null);

  // Fetch cars data from MongoDB on component mount
  useEffect(() => {
    getCars();
  }, []);

  // Function to get cars data from MongoDB
  const getCars = async () => {
    try {
      const response = await fetch(`${envConfig.apiUrl}/cars`);
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addCar = (newCar) => {
    const carsCopy = [...cars];
    carsCopy.push(newCar);
    setCars(carsCopy);
  };

  // Function to update an existing car in MongoDB
  const updateCar = async (updatedCar) => {
    try {
      const response = await fetch(
        `${envConfig.apiUrl}/cars/${updatedCar._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedCar),
        }
      );

      const data = await response.json();

      // If the car we are looping through has the same id as the one we just updated
      // then update that car inside the array.
      const updatedCars = cars.map((car) =>
        car._id === updatedCar._id ? data : car
      );
      setCars(updatedCars);
      setSelectedCar(null);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to update all cars that are older than five years in MongoDB
  const updateCars = async () => {
    try {
      const response = await fetch(`${envConfig.apiUrl}/cars/older-than-five`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to delete an existing car from MongoDB
  const deleteCar = async (index) => {
    try {
      await fetch(`${envConfig.apiUrl}/cars/${cars[index]._id}`, {
        method: "DELETE",
      });
      const newCars = [...cars];
      newCars.splice(index, 1);
      setCars(newCars);
    } catch (error) {
      console.error(error);
    }
  };

  const onOpenUpdateForm = (index) => {
    setSelectedCar(cars[index]);
  };

  const cancel = () => {
    setSelectedCar(null);
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center gap-10">
      <Home />
      <CarForm addCar={addCar} />
      <CarTable
        cars={cars}
        onOpenUpdateForm={onOpenUpdateForm}
        onDelete={deleteCar}
      />
      {selectedCar && (
        <UpdateCarForm
          car={selectedCar}
          updateCar={updateCar}
          cancel={cancel}
        />
      )}
    </div>
  );
}

export default App;
