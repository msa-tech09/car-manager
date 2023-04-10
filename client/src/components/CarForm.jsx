import { useState } from "react";
import axios from "axios";

import { envConfig } from "../constants/env-config";

const CarForm = ({ addCar }) => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    registrationNumber: "",
    currentOwner: "",
    year: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${envConfig.apiUrl}/cars`, formData);
      // alert("Car added successfully!");
      setFormData({
        make: "",
        model: "",
        year: "",
        registrationNumber: "",
        currentOwner: "",
      });

      const newCar = response.data;
      addCar(newCar);
    } catch (error) {
      console.error(error);
      alert("Error adding car");
    }
  };

  return (
    <form
      className="flex flex-col items-center justify-start mx-auto max-w-xl text-white w-full bg-gray-600/30 backdrop-filter shadow-md p-4 gap-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl">Add a new Car</h2>

      <div className="flex flex-col items-center justify-center">
        <label>Make:</label>
        <input
          type="text"
          name="make"
          className="input input-bordered w-full max-w-xs bg-gray-600/60"
          value={formData.make}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <label>Model:</label>
        <input
          type="text"
          name="model"
          className="input input-bordered w-full max-w-xs bg-gray-600/60"
          value={formData.model}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <label>Registration Number:</label>
        <input
          type="text"
          name="registrationNumber"
          className="input input-bordered w-full max-w-xs bg-gray-600/60"
          value={formData.registrationNumber}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <label>Current Owner:</label>
        <input
          type="text"
          name="currentOwner"
          className="input input-bordered w-full max-w-xs bg-gray-600/60"
          value={formData.currentOwner}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <label>Year:</label>
        <input
          type="number"
          name="year"
          className="input input-bordered w-full max-w-xs bg-gray-600/60"
          value={formData.year}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Add Car
      </button>
    </form>
  );
};

export default CarForm;
