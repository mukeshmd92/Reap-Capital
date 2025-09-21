import { useState, useRef, useEffect } from "react";
import BlackButton from "../components/BlackButton/BlackButton";
import { ChevronDown, ChevronUp } from "lucide-react";

// Reusable Dropdown component
const Dropdown = ({ options, placeholder, onSelect }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: any) => {
    setSelectedValue(option);
    setIsOpen(false);
    onSelect(option); // send selected value to parent form
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative mb-4" ref={dropdownRef}>
      {/* Input + Arrow */}
      <div
        className="flex items-center  rounded-lg px-3 py-3 cursor-pointer bg-[#f0f0f0]"
        onClick={toggleDropdown}
      >
        <input
          type="text"
          value={selectedValue}
          readOnly
          className="w-full placeholder:font-semibold placeholder:text-[#565656] outline-none cursor-pointer bg-transparent"
          placeholder={placeholder}
        />
        <span className="ml-2">
          {isOpen ? (
            <ChevronUp className="w-5 h-5" color="#9c9c9c" />
          ) : (
            <ChevronDown className="w-5 h-5" color="#9c9c9c" />
          )}
        </span>
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
    name: "",
    phone: "",
    businessAge: "",
    businessRevenue: "",
    businessGSTRegistered: "",
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
      `Form Submitted:\nName1: ${formData.name}\nphone: ${formData.phone}\nFruit: ${formData.businessAge}\nColor: ${formData.businessRevenue}\nVehicle: ${formData.businessGSTRegistered}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-5 max-w-lg   mx-auto  rounded-2xl shadow-lg bg-gray-50"
    >
      <h2 className="text-lg font-medium mb-4">Check If You’re Eligible</h2>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className="flex-1  w-5 bg-[#f0f0f0] rounded-lg px-3 py-2.5 placeholder:font-semibold placeholder:text-[#9c9c9c]"
          placeholder="Name as per PAN Card"
        />
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => {
            if (e.target.value.length > 10) {
              e.target.value = e.target.value.slice(0, 10);
            }
            handleInputChange("phone", e.target.value.replace(/[^0-9]/g, ""));
          }}
          className="flex-1 bg-[#f0f0f0]  rounded-lg px-3 py-2.5 placeholder:font-semibold placeholder:text-[#9c9c9c]"
          placeholder="Mobile Number"
          maxLength={10}
        />
      </div>

      {/* Dropdown 1 */}
      <Dropdown
        options={[
          "Less then 6 months",
          "6-12 months",
          "12-15 months",
          "3+ years",
        ]}
        placeholder="How old is your business?"
        onSelect={(value: any) => handleSelect("businessAge", value)}
      />

      {/* Dropdown 2 */}
      <Dropdown
        options={[
          "Less than 5 Lakhs",
          "5-7 Lakhs",
          "7-10 Lakhs",
          "10 Lakhs and above",
        ]}
        placeholder="What's Your annual business revenue ?"
        onSelect={(value: any) => handleSelect("businessRevenue", value)}
      />

      {/* Dropdown 3 */}
      <Dropdown
        options={["Yes", "No", "In Process"]}
        placeholder="Is Your business GST registered ?"
        onSelect={(value: any) => handleSelect("businessGSTRegistered", value)}
      />

      {/* Submit Button */}
      {/* <Button
        type="submit"
        className="mt-4 w-101  text-white py-2 "
      >
        Check Eligibility Now
      </Button> */}

      <BlackButton text="Check Eligibility Now" className="w-full ml-0 mt-3" />

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
