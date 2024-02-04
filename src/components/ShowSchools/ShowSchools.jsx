import React, { useEffect, useState } from "react";
import SchoolCards from "../SchoolCards/SchoolCards";

const ShowSchools = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/schools");
        const data = await res.json();
        setInfo(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto">
      {info.map((elem) => (
        <SchoolCards key={elem.id} elem={elem} />
      ))}
    </div>
  );
};

export default ShowSchools;
