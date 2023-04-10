const CarTable = ({ cars, onOpenUpdateForm, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Registration Number</th>
            <th>Current Owner</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={car._id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.registrationNumber}</td>
              <td>{car.currentOwner}</td>
              <td>{car.year}</td>
              <td className="flex flex-row justify-center items-center gap-4">
                <button
                  className="btn btn-warning"
                  onClick={() => onOpenUpdateForm(index)}
                >
                  Update
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => onDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarTable;
