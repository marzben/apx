import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"; // Importez les icônes d'œil de Heroicons
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginOption, setLoginOption] = useState("email");
  const [selectedCountry, setSelectedCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);
  const [value, setValue] = useState("");

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLoginOptionChange = (option) => {
    console.log("Option clicked:", option);
    setLoginOption(option);
  };

  const changeHandler = (value) => {
    setValue(value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-opacity-50 bg-cover bg-center background_img">
      <div className="bg-white p-8 rounded-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Sign in to Apex Network
        </h1>
        <h5 className="text-sm mb-8 text-center bg-white font-bold text-[#17202A]">
          Gain secure access to your account
        </h5>

        <div className="mb-4">
          <button
            className={`mr-4 px-4 py-2 w-1/4 h-1/3 rounded ${
              loginOption === "email"
                ? "bg-orange-400 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => handleLoginOptionChange("email")}
          >
            Email
          </button>
          <button
            className={`mr-4 px-4 py-2 w-1/4 h-1/3 rounded ${
              loginOption === "phone"
                ? "bg-orange-400 text-white"
                : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => handleLoginOptionChange("phone")}
          >
            Phone
          </button>
        </div>

        {loginOption === "phone" && (
          <div className="mb-4">
            <label htmlFor="phoneInput" className="block text-sm mb-2">
              Phone number
            </label>
            <div className="flex items-center">
              <Select
                options={options}
                value={value}
                onChange={changeHandler}
                classes="w-1/4 border rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
              />
              <input
                type="tel"
                id="phoneInput"
                className="w-3/4 border rounded-xl px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter your phone"
              />
            </div>
          </div>
        )}

        {loginOption === "email" && (
          <div className="mb-4">
            <label
              htmlFor="emailInput"
              className="block text-start text-sm mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="emailInput"
              className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:border-blue-500"
              placeholder="Enter email"
            />
          </div>
        )}

        <div className="mb-4 relative">
          <label
            htmlFor="passwordInput"
            className="block text-sm text-start mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="passwordInput"
              className="w-full border px-4 py-2 rounded-xl focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
            <button
              className="absolute top-1/1 right-0 mt-3 mr-3 transform -translate-y-1/1"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <EyeIcon className="h-6 w-6 text-gray-500" />
              ) : (
                <EyeOffIcon className="h-6 w-6 text-gray-500" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500 mr-1 rounded-lg"
            />
            Remember me
          </label>
          <a href="#" className="text-orange-400 text-sm">
            Forgot your password?
          </a>
        </div>

        <button className="bg-orange-500 text-white py-2 px-4 rounded-xl w-full mb-4">
          Sign In
        </button>

        <div className="text-center text-sm flex justify-center">
          <p>Don’t have an account?</p>
          <Link to="/register" className="text-orange-400 ml-2 ">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
