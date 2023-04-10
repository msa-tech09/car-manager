import React, { useState } from "react";
import axios from "axios";

import { envConfig } from "../constants/env-config";

function UpdateCarForm({ car, updateCar, cancel }) {
  const [formData, setFormData] = useState({
    ...car,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `${envConfig.apiUrl}/cars/${car._id}`,
        formData
      );
      updateCar(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="modal modal-open">
        <div className="modal-box bg-gray-300">
          <form
            className="flex flex-col items-center justify-start gap-4"
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

            <div className="flex flex-row justify-center items-center gap-4">
              <button type="submit" className="btn btn-success">
                Update
              </button>
              <button type="button" className="btn btn-error" onClick={cancel}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateCarForm;
