import AddSchools from "@/pages/addschool/addSchools";
import React, { useState } from "react";
import ShowSchools from "../ShowSchools/ShowSchools";

const Buttons = () => {
  const [activeComponent, setActiveComponent] = useState("Add Schools");

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="flex flex-col items-center justify-center m-2 p-2">
      <div className="flex">
        <button
          onClick={() => handleButtonClick("Add Schools")}
          className={`m-1 p-3 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out flex items-center ${
            activeComponent === "Add Schools" && "bg-blue-600"
          }`}
        >
          Add Schools
        </button>
        <button
          onClick={() => handleButtonClick("Show Schools")}
          className={`m-1 p-3 rounded-md bg-green-500 text-white hover:bg-green-600 transition duration-300 ease-in-out flex items-center ${
            activeComponent === "Show Schools" && "bg-green-600"
          }`}
        >
          Show Schools
        </button>
      </div>
      <div className="mt-4">
        {activeComponent === "Add Schools" && <AddSchools />}
        {activeComponent === "Show Schools" && <ShowSchools />}
      </div>
    </div>
  );
};

export default Buttons;
