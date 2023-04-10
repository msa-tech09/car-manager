import React from "react";

// This component displays a welcome message and description of the Car Database Application
const Home = () => {
  return (
    <div className="p-4 text-white text-center bg-gray-600 rounded-md">
      <h1 className="text-xl font-semibold">
        Welcome to the Car Database Application
      </h1>
      <p>
        This is a simple full-stack web application that allows you to add,
        update, delete, and list cars from a MongoDB database.
      </p>
    </div>
  );
};

export default Home;
