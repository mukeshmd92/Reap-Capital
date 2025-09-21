import React, { useState } from "react";
import BlackButton from "../components/BlackButton/BlackButton";

// Reusable Dropdown component
const Dropdown = ({ options, placeholder, onSelect }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: any) => {
    setSelectedValue(option);
    setIsOpen(false);
    onSelect(option); // send selected value to parent form
  };

  return (
    <div className="w-full relative mb-4">
      {/* Input + Arrow */}
      <div
        className="flex items-center  rounded px-3 py-2 cursor-pointer bg-gray-200"
        onClick={toggleDropdown}
      >
        <input
          type="text"
          value={selectedValue}
          readOnly
          className="w-full  placeholder-black outline-none cursor-pointer"
          placeholder={placeholder}
        />
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute placeholder-black mt-1 w-full bg-gray-100 border rounded shadow-lg z-10">
          {options.map((option: any, index: any) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Form
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name1: "",
    phone: "",
    fruit: "",
    color: "",
    vehicle: "",
  });

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSelect = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(
      `Form Submitted:\nName1: ${formData.name1}\nphone: ${formData.phone}\nFruit: ${formData.fruit}\nColor: ${formData.color}\nVehicle: ${formData.vehicle}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 max-w-md   mx-auto  rounded-2xl shadow-lg bg-gray-50"
    >
      <h2 className="text-lg font-medium mb-4">Check If You’re Eligible</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          required
          value={formData.name1}
          onChange={(e) => handleInputChange("name1", e.target.value)}
          className="flex-1  w-5 bg-gray-300 rounded px-3 py-2"
          placeholder="Name as per PAN Card"
        />
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="flex-1 bg-gray-200  rounded px-3 py-2"
          placeholder="Mobile Number"
          maxLength={10}
        />
      </div>

      {/* Dropdown 1 */}
      <Dropdown
        options={["Apple", "Banana", "Cherry"]}
        placeholder="Less than 6 months"
        onSelect={(value: any) => handleSelect("fruit", value)}
      />

      {/* Dropdown 2 */}
      <Dropdown
        options={["Red", "Blue", "Green", "Yellow"]}
        placeholder="What's Your annual business revenue ?"
        onSelect={(value: any) => handleSelect("color", value)}
      />

      {/* Dropdown 3 */}
      <Dropdown
        options={["Car", "Bike", "Bus", "Train"]}
        placeholder="Is Your business GST registered ?"
        onSelect={(value: any) => handleSelect("vehicle", value)}
      />

      {/* Submit Button */}
      {/* <Button
        type="submit"
        className="mt-4 w-101  text-white py-2 "
      >
        Check Eligibility Now
      </Button> */}

      <BlackButton text="Check Eligibility Now" />

      <div className="py-4">
        <p className="text-xs">
          By clicking on Check Loan Eligibility, you agree to our T&C and
          Privacy Policy. With your authorization, (Name of the authorisation)
          and our trusted lending partners will securely access your credit
          report to customise the best loan offers for you.
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
