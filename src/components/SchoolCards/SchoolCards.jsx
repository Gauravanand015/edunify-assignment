import React from "react";

const SchoolCards = ({ elem }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md m-2 border-2 border-gray-300">
      <img
        className="w-full h-40 object-cover object-center rounded-md"
        src={`${elem.image}`}
        alt="School Image"
      />
      <div className="text-gray-700 mt-4 flex flex-wrap justify-around">
        <p className="text-l font-semibold">{elem.city}</p>
        <p className="text-l font-semibold">{elem.state}</p>
      </div>
      <div className="text-gray-700 mt-4 flex flex-wrap justify-around">
        <p className="text-l font-normal">{elem.address}</p>
      </div>
      <div className="mt-2 text-center pb-4">
        <h3 className="text-lg font-bold text-blue-600">{elem.name}</h3>
      </div>
    </div>
  );
};

export default SchoolCards;
