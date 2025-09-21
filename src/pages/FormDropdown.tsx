import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ options, placeholder }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: any) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-64 relative mb-4" ref={dropdownRef}>
      {/* Input + Arrow */}
      <div className="flex items-center border rounded px-3 py-2 cursor-pointer">
        <input
          type="text"
          value={selectedValue}
          readOnly
          className="w-full outline-none cursor-pointer"
          placeholder={placeholder}
        />
        <button onClick={toggleDropdown} className="ml-2">
          ▼
        </button>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border rounded shadow-lg z-10">
          {options.map((option: any, index: any) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FormDropdown = () => {
  const handleSelect = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const [formData, setFormData] = useState({
    fruit: "",
    color: "",
    vehicle: "",
  });

  return (
    <div className="p-5">
      {/* Dropdown 1 */}
      <Dropdown
        options={["Apple", "Banana", "Cherry"]}
        placeholder="Select Fruit"
        onSelect={(value: any) => handleSelect("fruit", value)}
      />

      {/* Dropdown 2 */}
      <Dropdown
        options={["Red", "Blue", "Green", "Yellow"]}
        placeholder="Select Color"
        onSelect={(value: any) => handleSelect("color", value)}
      />

      {/* Dropdown 3 */}
      <Dropdown
        options={["Car", "Bike", "Bus", "Train"]}
        placeholder="Select Vehicle"
        onSelect={(value: any) => handleSelect("vehicle", value)}
      />
    </div>
  );
};

export default FormDropdown;
