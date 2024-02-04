import { uploadToCloudinary } from "@/utils/fileUpload";
import React, { useRef } from "react";

const SchoolForm = () => {
  const schoolNameRef = useRef();
  const schoolEmailRef = useRef();
  const schoolAddressRef = useRef();
  const schoolCityRef = useRef();
  const schoolStateRef = useRef();
  const schoolNumberRef = useRef();

  async function fetchData(info) {
    const formData = new FormData();

    // Append text data
    formData.append("name", info.name);
    formData.append("email_id", info.email_id);
    formData.append("contact", info.contact);
    formData.append("address", info.address);
    formData.append("city", info.city);
    formData.append("state", info.state);

    // Append file data
    const imageInput = document.getElementById("school-image");
    let secureURL = await uploadToCloudinary(imageInput.files[0]);
    formData.append("picture", imageInput.files[0]);
    formData.append("secureURL", secureURL.url);

    try {
      let res = await fetch("http://localhost:8080/schools", {
        method: "POST",
        body: formData,
      });

      let data = await res.json();
      if (data.message === "Successfully Stored") {
        alert(data.message);
        clearFields();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const inputHandler = () => {
    const schoolName = schoolNameRef.current.value;
    const schoolEmail = schoolEmailRef.current.value;
    const schoolAddress = schoolAddressRef.current.value;
    const schoolCity = schoolCityRef.current.value;
    const schoolState = schoolStateRef.current.value;
    const schoolNumber = schoolNumberRef.current.value;

    fetchData({
      name: schoolName,
      email_id: schoolEmail,
      contact: schoolNumber,
      address: schoolAddress,
      city: schoolCity,
      state: schoolState,
    });
  };

  const clearFields = () => {
    schoolNameRef.current.value = "";
    schoolEmailRef.current.value = "";
    schoolAddressRef.current.value = "";
    schoolCityRef.current.value = "";
    schoolStateRef.current.value = "";
    schoolNumberRef.current.value = "";
  };

  const formHandler = (event) => {
    event.preventDefault();
    inputHandler();
  };

  return (
    <form
      onSubmit={formHandler}
      className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          htmlFor="school-name"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          School Name:
        </label>
        <input
          type="text"
          id="school-name"
          placeholder="Enter School Name"
          ref={schoolNameRef}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="school-email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          School Email:
        </label>
        <input
          type="email"
          id="school-email"
          placeholder="Enter School email"
          ref={schoolEmailRef}
          required
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="school-address"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          School Address:
        </label>
        <input
          type="text"
          id="school-address"
          placeholder="Enter School Address"
          ref={schoolAddressRef}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="school-city"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          School City:
        </label>
        <input
          type="text"
          id="school-city"
          placeholder="Enter School City"
          ref={schoolCityRef}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="school-state"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          School State:
        </label>
        <input
          type="text"
          id="school-state"
          placeholder="Enter School State"
          ref={schoolStateRef}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="school-number"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          School Number:
        </label>
        <input
          type="text"
          id="school-number"
          placeholder="Enter School Number"
          ref={schoolNumberRef}
          maxLength={10}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="school-image"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          School Image:
        </label>
        <input
          type="file"
          id="school-image"
          name="file"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SchoolForm;
